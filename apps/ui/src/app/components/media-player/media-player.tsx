import './media-player.scss';
import { useAppSelector } from '@store/store';
import { selectMediaPlayer } from '@store/slices/media-player.slice';
import { useEffect, useRef, useState } from 'react';
import { durationConverter } from '@modules/feature.module';
import { Link } from 'react-router-dom';

export const MediaPlayer = () => {
  const nameWrapperRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const [needDoubleName, setNeedDoubleName] = useState(false);
  const mediaSelector = useAppSelector(selectMediaPlayer);
  const crSong = mediaSelector.currentSong;
  useEffect(() => {
    setNeedDoubleName(nameWrapperRef.current?.offsetWidth! < nameRef.current?.offsetWidth!);
    console.log(durationConverter(310));
    return () => {
    };
  }, [mediaSelector]);

  useEffect(() => {
    setNeedDoubleName(nameWrapperRef.current?.offsetWidth! < nameRef.current?.offsetWidth!);
    console.log(nameWrapperRef.current?.offsetWidth! < nameRef.current?.offsetWidth!);

  }, []);

  return <>
    <div className={`media-player flex`}>
      <div className="mp-left fa-center">
        {crSong && <>

          <img className="song-thumb" src={crSong?.artwork} alt="" title="thumbnail"/>
          <div className="info-group">
            <Link className="text-decoration-none w-fit" to={crSong?.mainArtist.profileUrl || ''}>
              <div className="gb-artist-name text-nowrap w-fit">{crSong?.mainArtist.name}</div>
            </Link>
            <div className={`name-wrapper ${needDoubleName ? 'auto-text' : ''}`} ref={nameWrapperRef}>
              <Link to={crSong.url} className='text-decoration-none flex'>
                <div className="gb-song-name text-nowrap w-fit" ref={nameRef}>{crSong?.songName}</div>
                {needDoubleName && <div className="gb-song-name text-nowrap w-fit">&nbsp;&nbsp;&nbsp;&nbsp;{crSong?.songName}</div>}
              </Link>
            </div>
            <div className="flex ">
              {crSong?.subArtist.map(e =>
                <div key={e.id} className="gb-sub-name divider-x">
                  <Link className="text-decoration-none gb-sub-artist-name text-nowrap" to={e.profileUrl}>{e.name}</Link>
                  <span className="div-x">&nbsp;x&nbsp;</span>
                </div>
              )}
            </div>
          </div>
        </>
        }
      </div>
      <div className="mp-center"></div>
      <div className="mp-right"></div>
    </div>

  </>;
};
