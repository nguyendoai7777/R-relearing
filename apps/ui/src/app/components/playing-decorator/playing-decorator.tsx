import './playing-decorator.scss';
import { useAppDispatch, useAppSelector } from '@store/store';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { CSSProperties, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { audioElement } from '@constants/profile.const';
import { SongBase } from '@models/media.model';
import { nameConverter } from '@modules/feature.module';
import { selectMediaPlayer, setCurrentSong } from '@store/slices/media-player.slice';

export interface PlayingDecoratorProps {
  className?: string;
  style?: CSSProperties;
  currentsong?: SongBase;
}

export const PlayingDecorator = (pr: PlayingDecoratorProps) => {
  const [clicked, setClicked] = useState(0);
  const [currentTime, setCurrentTime] = useState(.1);
  const [duration, setDuration] = useState(10000);

  const { playing } = useAppSelector(selectPlayState);
  const { currentSong } = useAppSelector(selectMediaPlayer);
  const dispatch = useAppDispatch();
  const setPlaying = () => {
    if(pr.currentsong?.id !== (currentSong?.id || '')) {
      dispatch(setCurrentSong(pr!.currentsong!));
    }
    dispatch(playing ? pause() : play());
  };

  useEffect(() => {
    audioElement.duration && setDuration(audioElement.duration);
    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(audioElement.duration);
    });
    audioElement.addEventListener('timeupdate', () => {
      setCurrentTime(audioElement.currentTime);
    });
  }, []);

  useEffect(() => {

    if (playing) {
      setClicked(2);
    } else {
      setClicked(clicked + 1);
    }
  }, [playing]);

  return <div {...pr} className={`decorate-box${playing ? ' is-play' : ''} ${pr.className ? ' ' + pr.className : ''}`}>
    <div className="decorator relative">
      <div
        className={`decorate-thumb cs-pointer relative ${playing ? 'playing' : ''} ${(!playing && clicked > 1) ? 'off' : ''}`}
        onClick={setPlaying}
      >
        <img className="decorate-img" src={pr.currentsong?.artwork} alt=""/>
        <div className="decorate-thumb-overlay absolute"></div>

      </div>
      {playing && <svg className="playing-ic-wa absolute-center">
        <use href="#playing-animate"/>
      </svg>}
      <svg className={`playing-ic-wa dc-playable absolute-center ${playing ? 'hidden' : ''}`}>
        <use href="#playable"/>
      </svg>
      <div className={`circular-progress ${playing ? 'playing' : ''}`}>
        <div className="ink-circular-progress" style={{ background: `conic-gradient(var(--nav-active-detective) ${currentTime / duration * 100 * 3.6}deg, transparent 0deg)` }}></div>
      </div>
      <div className={`border-protected${playing ? ' playing' : ''}`}></div>

    </div>
    <div className="flex flex-col align-items-center decorator">
      <div className="dc-name">{pr.currentsong?.songName}</div>
      <Link className="dc-ar base-nav" to={pr.currentsong?.mainArtist!.profileUrl!}>{nameConverter(pr.currentsong?.mainArtist.name)}</Link>
      <div className="dc-sb-ar flex flex-wrap">
        {pr.currentsong?.subArtist.length! > 0 && pr.currentsong?.subArtist.map(e => <div className="flex divider-x" key={e.id}>
          <Link to={e.profileUrl} className="base-nav">{e.name}</Link>
          <span className="div-x">&nbsp;x&nbsp;</span>
        </div>)}
      </div>
      <div className="release">Phát hành: 29/04/2022</div>
    </div>

  </div>;
};

