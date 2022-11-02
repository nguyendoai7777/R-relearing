import './media-player.scss';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectMediaPlayer, setCurrentSong } from '@store/slices/media-player.slice';
import { useEffect, useRef, useState } from 'react';
import { durationConverter, nameConverter, saveVolumeToLocal } from '@modules/feature.module';
import { Link } from 'react-router-dom';
import { ButtonBase, Slider } from '@mui/material';
import { SLIDER_SX, VOLUME_SX } from '@constants/theme.const';
import { LOCAL_KEY } from '@constants/storage-key.const';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { selectLoopState, setLoop, setShuffle, UnionLoop } from '@store/slices/loop-state.slice';
import { DEFAULT_VOLUME } from '@constants/mock.const';

export const MediaPlayer = () => {
  const localVolumeState = +(localStorage.getItem(LOCAL_KEY.SetVolume) || DEFAULT_VOLUME);
  const nameWrapperRef = useRef<HTMLDivElement | null>(null);
  const [mp3Audio] = useState(new Audio());

  const nameRef = useRef<HTMLDivElement | null>(null);
  const [needDoubleName, setNeedDoubleName] = useState(false);
  const [mute, setMute] = useState((localStorage.getItem(LOCAL_KEY.SetMute) || '0') === '1');
  const [volume, setVolume] = useState(localVolumeState);
  const [duration, setDuration] = useState(0);
  const [currentPlayingTime, setCurrentPlayingTime] = useState(0);

  const playSelector = useAppSelector(selectPlayState);
  const mediaControlSelector = useAppSelector(selectLoopState);
  const mediaSelector = useAppSelector(selectMediaPlayer);
  const crSong = mediaSelector.currentSong;
  const crListSong = mediaSelector.currentList;
  const dispatch = useAppDispatch();


  const onVolumeChange = (value: number) => {
    setVolume(value);
    saveVolumeToLocal(value);
  };

  const onWheelChange = (e: any) => {
    const event = e as unknown as WheelEvent;
    if (event.deltaY < 0) {
      if (volume >= 0 && volume < 100) {
        setVolume(volume + 1);
        saveVolumeToLocal(volume);
      }
    } else {
      if (volume > 0 && volume <= 100) {
        setVolume(volume - 1);
        saveVolumeToLocal(volume);
      }
    }
  };

  const setPlaying = () => {
    const t = !playSelector.playing;
    dispatch(t ? play() : pause());
  };

  const setPlayDelay = () => {
    const delay = setTimeout(() => {
      dispatch(play());
      clearTimeout(delay);
    }, 100);
  };

  const onNext = () => {
    const currentIndex = crListSong.findIndex(e => e.id === crSong?.id);
    dispatch(pause());
    if (currentIndex < crListSong.length - 1) {
      mp3Audio.currentTime = 0;
      dispatch(setCurrentSong(crListSong[currentIndex + 1]));
      setPlayDelay();
    } else {
      dispatch(setCurrentSong(crListSong[0]));
    }

  };
  const onPrev = () => {
    const currentIndex = crListSong.findIndex(e => e.id === crSong?.id);
    dispatch(pause());
    if (currentIndex > 0) {
      dispatch(setCurrentSong(crListSong[currentIndex - 1]));
      setPlayDelay();
    } else {
      dispatch(setCurrentSong(crListSong[crListSong.length - 1]));
      setPlayDelay();
    }
  };

  const setLoopState = () => {
    const l = mediaControlSelector.loop;
    dispatch(setLoop((l + 1) % 3 as UnionLoop));
  };

  const setShuffleState = () => {
    const s = mediaControlSelector.shuffle;
    dispatch(setShuffle(!s));
  };

  useEffect(() => {
    const cacheVolume = +(localStorage.getItem(LOCAL_KEY.SetCacheVolume) || DEFAULT_VOLUME);
    setVolume(mute ? 0 : cacheVolume);
    localStorage.setItem(LOCAL_KEY.SetMute, mute ? '1' : '0');
  }, [mute]);

  useEffect(() => {
    mp3Audio.loop = (mediaControlSelector.loop === 1);
    switch (mediaControlSelector.loop) {
      case 0: {  // no loop
        const currentIndex = crListSong.findIndex(e => e.id === crSong?.id);
        mp3Audio.onended = () => {
          if (currentIndex === crListSong.length - 1) {
            dispatch(pause());
            mp3Audio.currentTime = 0;
            dispatch(setCurrentSong(crListSong[0]));
          } else {
            onNext();
          }
        };
        break;
      }
      case 1: {
        break;
      }
      case 2: { // loop all
        mp3Audio.onended = () => {
          mp3Audio.currentTime = 0;
          onNext();
        };
        break;
      }
    }

  }, [mediaControlSelector.loop]);

  useEffect(() => {
    setNeedDoubleName(nameWrapperRef.current?.offsetWidth! < nameRef.current?.offsetWidth!);
    mp3Audio.src = crSong?.mediaUrl!;
    mp3Audio.loop = mediaControlSelector.loop === 1;
    mp3Audio.onloadeddata = () => {
      setDuration(mp3Audio.duration);
    };
    mp3Audio.ontimeupdate = () => {
      setCurrentPlayingTime(mp3Audio.currentTime);
    };
  }, [mediaSelector]);

  useEffect(() => {
    mp3Audio.volume = volume / 100;
  }, [volume]);


  useEffect(() => {
    const p = playSelector.playing;
    if (p) {
      void mp3Audio.play();
    } else {
      mp3Audio.pause();
    }
  }, [playSelector.playing]);

  return <>
    <div className={`media-player flex`}>
      <div className="mp-left fa-center">
        {crSong && <>
          <img className="song-thumb" src={crSong?.artwork} alt="" title="thumbnail"/>
          <div className="info-group">
            <Link className="text-decoration-none w-fit" to={crSong?.mainArtist.profileUrl || ''}>
              <div className="gb-artist-name text-nowrap w-fit">{nameConverter(crSong?.mainArtist.name)}</div>
            </Link>
            <div className={`name-wrapper ${needDoubleName ? 'auto-text' : ''}`} ref={nameWrapperRef}>
              <Link to={crSong.url} className="text-decoration-none flex">
                <div className="gb-song-name text-nowrap w-fit" ref={nameRef}>{crSong?.songName}</div>
                {needDoubleName && <div className="gb-song-name text-nowrap w-fit">&nbsp;&nbsp;&nbsp;&nbsp;{crSong?.songName}</div>}
              </Link>
            </div>
            <div className="flex ">
              {crSong?.subArtist.map(e =>
                <div key={e.id} className="gb-sub-name divider-x text-nowrap">
                  <Link className="text-decoration-none gb-sub-artist-name text-nowrap" to={e.profileUrl}>{e.name}</Link>
                  <span className="div-x">&nbsp;x&nbsp;</span>
                </div>
              )}
            </div>
          </div>
        </>
        }
      </div>
      <div className="mp-center">
        <div className="control-head fj-center align-items-center">
          <ButtonBase className={`RippleColorTheme circle-corners ctrl-btn ${mediaControlSelector.shuffle ? 'looped' : ''}`} onClick={setShuffleState}>
            <svg className="ctrl-icon">
              <use href="#shuffle"/>
            </svg>
          </ButtonBase>
          <ButtonBase className="RippleColorTheme circle-corners ctrl-btn" onClick={onPrev}>
            <svg className="ctrl-icon">
              <use href="#ctrl"/>
            </svg>
          </ButtonBase>
          <ButtonBase className="RippleColorTheme circle-corners ctrl-btn" onClick={setPlaying}>
            <svg className="ctrl-icon">
              <use href={`#ctrl-${playSelector.playing ? 'playing' : 'paused'}`}/>
            </svg>
          </ButtonBase>
          <ButtonBase className="RippleColorTheme circle-corners ctrl-btn" onClick={onNext}>
            <svg className="ctrl-icon">
              <use href="#ctrl"/>
            </svg>
          </ButtonBase>
          <ButtonBase className={`RippleColorTheme circle-corners ctrl-btn relative ${mediaControlSelector.loop !== 0 ? 'looped' : ''}`} onClick={setLoopState}>
            <svg className="ctrl-icon">
              <use href={`#loop${mediaControlSelector.loop === 1 ? '-1' : ''}`}/>
            </svg>
            {mediaControlSelector.loop === 1 && <div className="loop-1-sym">1</div>}
          </ButtonBase>
        </div>
        <div className="fj-center align-items-center">
          <div className="duration-text">{durationConverter(currentPlayingTime)}</div>
          <div className="control-main">
            <Slider
              aria-label="time-indicator"
              size="small"
              value={currentPlayingTime}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => {
                mp3Audio.currentTime = value as number;
                setCurrentPlayingTime(value as number);
              }}
              sx={SLIDER_SX}
            />
          </div>
          <div className="duration-text">{durationConverter(duration)}</div>
        </div>
      </div>
      <div className="mp-right fj-center align-items-center">
        <svg className={`volume-icon cs-pointer ${volume >= 65 ? 'waring' : ''}`} onClick={() => setMute(!mute)}>
          <use href={`#volume-${volume === 0 ? 'mute' : volume < 30 ? 'min' : volume >= 30 && volume < 75 ? 'medium' : 'max'}`}/>
        </svg>
        <Slider
          className="volume"
          aria-label="time-indicator"
          size="small"
          value={volume}
          min={0}
          step={1}
          max={100}
          onChange={(_, value) => onVolumeChange(value as number)}
          onWheel={(e) => onWheelChange(e)}
          sx={VOLUME_SX}
        />
      </div>
    </div>

  </>;
};
