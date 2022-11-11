import './top-100.scss';
import { Gallery } from '@screens/top-100/components/gallery/gallery';
import { List100 } from '@screens/top-100/components/list/list';
import { DIS_STANDOUT_SONG_LIST, generateSongsByAmount } from '@constants/mock.const';
import { uuid } from '@modules/feature.module';
import { MouseEvent, useEffect, useState } from 'react';
import { ButtonBase, Menu, MenuItem } from '@mui/material';
import { useAppDispatch } from '@store/store';
import { setCurrentLists } from '@store/slices/media-player.slice';
import { CreatePlaylistDialog } from '@screens/personal/components/create-playlist-dialog/create-playlist-dialog';
import { SongBase } from '@models/media.model';
import { addOneToPlaylist, PlaylistState } from '@store/slices/playlist.slice';


export const Top100Screen = () => {
  const song10 = generateSongsByAmount(10).map(e => ({ ...e, id: uuid() }));
  const song100 = generateSongsByAmount(100).map(e => ({ ...e, id: uuid() }));
  const [songs, setSongs] = useState(song10);
  const [mount, setMount] = useState(false);
  const [subOptionRef, setSubOptionRef] = useState<null | HTMLElement>(null);
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [selectedSong, setSelectedSong] = useState<SongBase | null>(null);
  const [playlist, setPlaylist] = useState<PlaylistState[]>([]);
  const openSubOptionRef = Boolean(subOptionRef);

  const dispatch = useAppDispatch();
  const setList = () => {
    setMount(!mount);
  };
  const onSelectSong = (e: MouseEvent<HTMLElement>, currentSong: SongBase) => {
    setSubOptionRef(e.currentTarget);
    setSelectedSong(currentSong);
  };
  const closeOption = () => {
    setSubOptionRef(null);
    setSelectedSong(null);
  };

  const addOneSongToPlaylist = (song: SongBase, parentId: string) => {
    dispatch(addOneToPlaylist({ song, parentId }));
  };

  useEffect(() => {
    setSongs(mount ? song100 : song10);
  }, [mount]);



  return <>
    <div className="body-cc60">
      <div className="header-pai">Nhạc Việt Hôm Nay</div>
      <div>
        {songs.map((e, i) => <List100
          key={e.id}
          index={i + 1}
          song={e}
          onPlay={() => dispatch(setCurrentLists(songs))}
          onAdd={ev => onSelectSong(ev, e)}

        />)}
      </div>
      <div className="flex justify-content-center">
        <ButtonBase className="load-btn" onClick={setList}>{mount ? 'Thu Gọn' : 'Xem 100'}</ButtonBase>
      </div>
      <div className="header-pai">Khám phá TOP 100</div>
      <Gallery/>
    </div>

    <Menu
      className="option-ref"
      id="basic-menu"
      anchorEl={subOptionRef}
      open={openSubOptionRef}
      onClose={() => {
        setSubOptionRef(null);
        closeOption();
      }}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem
        className="add-to-list relative"
        onClick={(e) => setCreatePlaylist(true)}
      >
        <svg className="ref-icon mr-df">
          <use href="#add"/>
        </svg>
        Tạo mới
      </MenuItem>
      {playlist.map(e =>
        <MenuItem key={e.id} onClick={() => addOneSongToPlaylist(selectedSong!, e.id)}>
          <svg className="ref-icon mr-df">
            <use href="#playlist"/>
          </svg>
          {e.name}
        </MenuItem>)
      }

    </Menu>
    <CreatePlaylistDialog currentSong={selectedSong} onClose={() => {
      setCreatePlaylist(false);
      setSubOptionRef(null);
      closeOption();
    }} open={createPlaylist}/>
    {/*
    <ContextMenu open={contextMenu !== null} position={contextMenu}>eadasd</ContextMenu>
*/}
  </>;
};
