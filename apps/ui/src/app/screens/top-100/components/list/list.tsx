import './list.scss';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import { SongBase } from '@models/media.model';
import React, { FC, forwardRef, MouseEvent, ReactElement, RefObject, useEffect, useId, useRef, useState } from 'react';
import { selectMediaPlayer, setCurrentSong } from '@store/slices/media-player.slice';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { pushOne } from '@store/slices/listened-history.slice';
import { durationConverter, nameConverter } from '@modules/feature.module';
import { MousePosition } from '@models/theme.model';

export interface List100Props {
  index?: number;
  song: SongBase;
  onContextMenu?: (e: MouseEvent) => void;
  isAtTop?: boolean;
  onPlay?: () => void;
  className?: string;
}

export interface ContextMenuProps {
  open: boolean;
  position: MousePosition | null;
  children: ReactElement | string;
}


export const ContextMenu = (pr: ContextMenuProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setOpen(pr.open);
  }, [pr.open]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return <>
    {open && <div ref={ref} onContextMenu={(e) => e.preventDefault()} className={'ctx-menu'} style={{ top: `${pr?.position?.mouseY || 0}px`, left: `${pr?.position?.mouseX}px` }}>
      {pr.children}
    </div>}
  </>;
};

export const List100 = forwardRef<HTMLDivElement, List100Props>(({song, onPlay, index, onContextMenu, isAtTop, className}, ref) => {
  const { currentSong } = useAppSelector(selectMediaPlayer);
  const { playing } = useAppSelector(selectPlayState);
  const dispatch = useAppDispatch();


  const selectedPlayingSong = () => {
    if ((currentSong?.id || '') === song.id) {
      dispatch(playing ? pause() : play());
    } else {
      dispatch(pause());
      dispatch(setCurrentSong(song));
      dispatch(pushOne(song));
      const delay = setTimeout(() => {
        dispatch(play());
        clearTimeout(delay);
      }, 100);
    }
    onPlay && onPlay();
  };

  return <>
    <div ref={ref} className={`list-root fa-center${className ? ' ' + className : ''}${currentSong?.id === song.id ? ' is-playing' : ''}`} onDoubleClick={selectedPlayingSong} onContextMenu={onContextMenu}>
      {isAtTop && <>
        <div className={`order fa-center justify-content-center ${index === 1 || index === 2 || index === 3 ? `order-${index}` : ''}`}><span>{index}</span></div>
        <div className="status flex-center-center">--</div>
      </>}
      <div className="main fa-center">
        <ButtonBase className="thumbnail relative" onClick={selectedPlayingSong}>
          <img src={song.artwork} alt=""/>
          <div className="overlay absolute"></div>
          <div className="state user-select-none disable-event absolute-center">
            {
              playing && currentSong?.id === song.id ? <svg>
                  <use href={`#playing-animate`}/>
                </svg> :
                <svg className="play-pos">
                  <use href={`#playable`}/>
                </svg>}
          </div>
        </ButtonBase>
        <div className="info flex flex-col justify-between">
          <div className="name text-ellipsis">{song.songName}</div>
          <div className="flex">
            <Link to={song.mainArtist.profileUrl} className="ar-name base-nav text-nowrap">{nameConverter(song.mainArtist.name)}</Link>
            {
              song.subArtist.length > 0 && <span className="ar-name text-nowrap">&nbsp;(
                {
                  song.subArtist.map(e => <span className="divider-x" key={e.id}>
                <Link to={e.profileUrl} className=" base-nav">{nameConverter(e.name)}</Link>
                <span className="div-x">, </span>
              </span>)
                }
                )</span>
            }
          </div>
        </div>
        <div className="remaining album-name">
          <Link className="base-nav" to="tada">unknown name</Link>
        </div>
        <div className="remaining action flex justify-content-end align-items-center">
          <span className="duration">{durationConverter(song.songDuration)}</span>
          <ButtonBase className="button">
            <svg>
              <use href="#add"/>
            </svg>
          </ButtonBase>
        </div>
      </div>
    </div>
  </>;
});
