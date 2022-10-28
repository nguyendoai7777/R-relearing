import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { PlaylistState, removeOneToPlaylist, selectPlaylist } from '@store/slices/playlist.slice';
import { LOCAL_KEY } from '@constants/storage-key.const';
import { ListenedSongItem } from '@screens/personal/components/listened-song-item';
import { useAppDispatch } from '@store/store';
import { useSelector } from 'react-redux';

export const PlaylistScreen = () => {
  const { playlistId } = useParams();
  const dispatch = useAppDispatch();
  const playlistSelector = useSelector(selectPlaylist);
  const [playlist, setPlaylist] = useState<PlaylistState | undefined>();

  useEffect(() => {
    const rawPlaylist = JSON.parse(localStorage.getItem(LOCAL_KEY.PlayList) || '[]') as PlaylistState[];
    const playlist = rawPlaylist.find(e => e.id === playlistId);
    setPlaylist(playlist);
  }, [playlistSelector]);

  return <div className="body-cc60">
    {playlist ? <>
      <div className="header-pai fj-between align-items-center">{playlist.name} <i className="intro">{playlist.createAt}</i></div>
      {
        playlist.songs.length > 0 ? <div className="flex flex-wrap">
          {
            playlist.songs.map(e => <ListenedSongItem
              mode='delete'
              key={e.key}
              onClick={() => {}}
              artwork={e.artwork}
              url={e.url}
              mainArtist={e.mainArtist}
              songName={e.songName}
              onOptionClick={(ev) => {
                console.log('vao day roi');
                dispatch(removeOneToPlaylist({childId: e.key, parentId: playlistId!}))
              }}
            />)
          }
        </div> : <div>Trống</div>
      }

    </> : <div>Something went wrong!</div>
    }

  </div>;
};
