import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import './playlist.scss';
import { DIS_STANDOUT_SONG_LIST } from '@constants/mock.const';
import { useSelector } from 'react-redux';
import { playlistSlice, PlaylistState, selectPlaylist } from '@store/slices/playlist.slice';
import { useEffect } from 'react';



const PlaylistItem = (pr: Omit<PlaylistState, 'createAt'>) => {

  return <Link to={`/playlist/${pr.id}`} className="playlist-item-root">
    <div className="box decorate de-1"></div>
    <div className="box decorate de-2"></div>
    <ButtonBase className="playlist-item">
      {pr.songs.length > 0 ? <img className="box" src={pr.songs[0].artwork} alt=""/> :
        <svg className="box">
          <use href="#square-skeleton"/>
        </svg>
      }

    </ButtonBase>
    <div className="info">
      <div className="name text-ellipsis">{pr.name}</div>
      <div className="quantity">{pr.songs.length} bài</div>
    </div>
  </Link>;
};

export const Playlist = () => {
  const t = DIS_STANDOUT_SONG_LIST;
  const { playlists } = useSelector(selectPlaylist);
  const a = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 19, 2, 2, 2];
  useEffect(() => {
    console.log('playlist: ', playlists);
  }, []);

  return <div className="flex flex-wrap" style={{ margin: '0 -6px 0 -12px' }}>
    {
      playlists.map(e =>
        <PlaylistItem
          id={e.id}
          name={e.name}
          songs={e.songs}
          key={e.id}
        />)
    }

  </div>;
};
