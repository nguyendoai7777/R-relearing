import { Link } from 'react-router-dom';
import { ButtonBase, styled, Tooltip, tooltipClasses, TooltipProps, withStyles, Zoom } from '@mui/material';
import './playlist.scss';
import { DIS_STANDOUT_SONG_LIST } from '@constants/mock.const';
import { useSelector } from 'react-redux';
import { PlaylistState, removeThis, selectPlaylist } from '@store/slices/playlist.slice';
import { useEffect } from 'react';
import { randomHexColor } from '@modules/feature.module';
import { ColourTooltip } from '@cpns/colour-tooltip/colour-tooltip';
import { useAppDispatch, useAppSelector } from '@store/store';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { selectMediaPlayer, setCurrentLists, setCurrentSong } from '@store/slices/media-player.slice';
import { pushOne } from '@store/slices/listened-history.slice';

export interface PlaylistItemEvent {
  onPlay?: () => void;
  onDelete?: () => void;
}


const PlaylistItem = (pr: Omit<PlaylistState, 'createAt'> & PlaylistItemEvent) => {
  return <Link to={`/playlist/${pr.id}`} className="playlist-item-root">
    <div className="box decorate de-1"></div>
    <div className="box decorate de-2"></div>

    <ButtonBase className="playlist-item">
      {pr.songs.length > 0 ? <img className="box" src={pr.songs[0].artwork} alt=""/> :
        <svg className="box" fill={randomHexColor()}>
          <use href="#square-skeleton"/>
        </svg>
      }

    </ButtonBase>
    <div className="info">
      <div className="name text-ellipsis">{pr.name}</div>
      <div className="quantity">{pr.songs.length} bài</div>
    </div>
    <div className="action-lead">
      <ColourTooltip title="Xóa" placement="top" arrow TransitionComponent={Zoom}>
        <ButtonBase
          className="flexible-display-button"
          onClick={(e) => {
            e.preventDefault();
            pr.onDelete && pr.onDelete();
          }}>
          <svg style={{ transform: 'rotate(45deg)' }} className="p-delete">
            <use href="#add"/>
          </svg>
        </ButtonBase>
      </ColourTooltip>
      {pr.songs.length > 0 && <ColourTooltip title="Phát" placement="top" arrow TransitionComponent={Zoom}><ButtonBase
        className="flexible-display-button"
        onClick={(e) => {
          e.preventDefault();
          pr.onPlay && pr.onPlay();
        }}>
        <svg className="p-delete">
          <use href="#playable"/>
        </svg>
      </ButtonBase></ColourTooltip>}
    </div>
  </Link>;
};

export const Playlist = () => {
  const { playlists } = useSelector(selectPlaylist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('playlist: ', playlists);
  }, []);

  return <>
    <div className="flex flex-wrap" style={{ margin: '0 -6px 0 -12px' }}>
      {
        playlists.map((e, i) =>
          <PlaylistItem
            id={e.id}
            name={e.name}
            songs={e.songs}
            key={e.id}
            onDelete={() => dispatch(removeThis(e.id))}
            onPlay={() => {

              dispatch(pause());
              dispatch(setCurrentSong(e.songs[0]));
              dispatch(pushOne(e.songs[0]));
              const delay = setTimeout(() => {
                dispatch(play());
                dispatch(setCurrentLists(playlists[i].songs))
                clearTimeout(delay);
              }, 100);


            }}
          />)
      }

    </div>
  </>;
};
