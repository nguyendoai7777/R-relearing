import './right-sidebar.scss';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectMediaPlayer, setCurrentSong } from '@store/slices/media-player.slice';
import { SongBase } from '@models/media.model';
import { Link } from 'react-router-dom';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { pushOne } from '@store/slices/listened-history.slice';

interface Action {
  onClick: () => void;
  className?: string;
  isPlaying: boolean;
}

export const SongItem = (pr: Omit<SongBase, 'index' | 'songDuration' | 'key' | 'mediaUrl' | 'listenTimes'> & Action) => {
  return <div className={`fa-center sil ${pr.className}`}>
    <div className="can-play" onClick={pr.onClick}>
      <img src={pr.artwork} alt=""/>
      <div className="playable">
        {
          pr.isPlaying ? <svg>
              <use href="#pauseable"/>
            </svg> :
            <svg>
              <use href="#playable"/>
            </svg>
        }
      </div>
    </div>
    <div className="detail fj-between flex-col">
      <Link className="text-decoration-none" to={pr.url}>
        <div className="name">{pr.songName}</div>
      </Link>
      <Link className="base-nav" to={pr.mainArtist.profileUrl}>
        <div className="artist">{pr.mainArtist.name}</div>
      </Link>
      {
        pr.subArtist.length > 0 && <div className="flex">
          {
            pr.subArtist.map(e => <span className="sub-artist divider-x" key={e.id}>
                <Link className="base-nav" to={e.profileUrl}>{e.name} </Link>
                <span className="div-x"> x&nbsp;</span>
              </span>
            )
          }
        </div>
      }
    </div>
  </div>;
};


export function RightSidebar() {
  const scopeStyle = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { currentList, currentSong } = useAppSelector(selectMediaPlayer);
  const { playing } = useAppSelector(selectPlayState);


  useEffect(() => {
    scopeStyle.current?.setAttribute('__right_sidebar_style_scope', '');
  }, []);
  return (
    <div ref={scopeStyle} className="rsb-r">
      <div className="header-pai r-head fa-center">Danh sách phát</div>
      {(currentList || []).length > 0 ?
        <>
          {currentList.map((e, i) => <SongItem
            isPlaying={playing && currentSong?.index === e.index}
            className={currentSong?.index === e.index ? 'playing' : ''}
            onClick={() => {
              if (currentSong?.index === e.index) {
                dispatch(playing ? pause() : play());
              } else {
                dispatch(pause());
                dispatch(setCurrentSong(e));
                dispatch(pushOne(e));
                const delay = setTimeout(() => {
                  dispatch(play());
                  clearTimeout(delay);
                }, 100);
              }
            }}
            key={e.key}
            url={e.url}
            mainArtist={e.mainArtist}
            subArtist={e.subArtist}
            artwork={e.artwork}
            songName={e.songName}
          />)}
        </>
        : <div>Trống</div>}

    </div>
  );
}


export default RightSidebar;
