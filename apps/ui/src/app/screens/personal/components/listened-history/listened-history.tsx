import { MouseEvent, useEffect, useId, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store';
import { pushOne, removeOne, selectListenedList } from '@store/slices/listened-history.slice';
import { ListenedSongItem } from '@screens/personal/components/listened-song-item';
import { Menu, MenuItem } from '@mui/material';
import { CreatePlaylistDialog } from '@screens/personal/components/create-playlist-dialog/create-playlist-dialog';
import { SongBase } from '@models/media.model';
import { addOneToPlaylist, PlaylistState, removeOneToPlaylist } from '@store/slices/playlist.slice';
import { LOCAL_KEY } from '@constants/storage-key.const';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { selectMediaPlayer, setCurrentLists, setCurrentSong } from '@store/slices/media-player.slice';
import { AnimationController } from '@modules/animate.module';
export const ListenedHistory = () => {
  const [optionRef, setOptionRef] = useState<null | HTMLElement>(null);
  const [subOptionRef, setSubOptionRef] = useState<null | HTMLElement>(null);
  const [subOptionActive, setSubOptionActive] = useState(false);
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [selectedSong, setSelectedSong] = useState<SongBase | null>(null);
  const [playlist, setPlaylist] = useState<PlaylistState[]>([]);

  const { currentHistoryList } = useAppSelector(selectListenedList);
  const { currentSong } = useAppSelector(selectMediaPlayer);
  const { playing } = useAppSelector(selectPlayState);

  const dispatch = useAppDispatch();
  const openOptionRef = Boolean(optionRef);
  const openSubOptionRef = Boolean(subOptionRef);

  const onSelectSong = (e: MouseEvent<HTMLButtonElement>, currentSong: SongBase) => {
    setOptionRef(e.currentTarget);
    setSelectedSong(currentSong);
  };
  const closeOption = () => {
    setOptionRef(null);
    setSelectedSong(null);
  };

  const playThisSong = (e: any, s: SongBase) => {
    if ((currentSong?.id || '') === s.id) {
      dispatch(playing ? pause() : play());
    } else {
      dispatch(pause());
      dispatch(setCurrentSong(s));
      dispatch(pushOne(s));
      const delay = setTimeout(() => {
        dispatch(play());
        dispatch(setCurrentLists(currentHistoryList));
        clearTimeout(delay);
      }, 100);
    }
    AnimationController.onActivateEffect(e)
  };

  const addOneSongToPlaylist = (song: SongBase, parentId: string) => {
    dispatch(addOneToPlaylist({ song, parentId }));
  };

  const deleteOneSong = (index: string) => {
    dispatch(removeOne(index));
    closeOption();
  };

  useEffect(() => {
    const rawPlaylist = JSON.parse(localStorage.getItem(LOCAL_KEY.PlayList) || '[]') as PlaylistState[];
    setPlaylist(rawPlaylist);
  }, []);


  return <>
    <div className="flex flex-wrap listened-list" style={{ marginTop: '6px' }}>
      {
        currentHistoryList.length > 0 ? <>
          {
            currentHistoryList.map(e => <ListenedSongItem
              key={e.id}
              id={e.id}
              artwork={e.artwork}
              url={e.url}
              mainArtist={e.mainArtist}
              songName={e.songName}
              onClick={(ev) => playThisSong(ev, e)}
              isPlaying={playing && e.id === currentSong?.id}
              onOptionClick={(ev) => onSelectSong(ev, e)}
            />)
          }
        </> : <div>Trống</div>
      }
    </div>

    <Menu
      className="option-ref"
      id="basic-menu"
      anchorEl={optionRef}
      open={openOptionRef}
      onClose={closeOption}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={() => deleteOneSong(selectedSong?.id!)}>
        <svg className="ref-icon mr-df">
          <use href="#delete"/>
        </svg>
        Xóa</MenuItem>
      <MenuItem
        className={`add-to-list relative ${subOptionActive ? 'active' : ''}`}
        onClick={(e) => {
          setSubOptionRef(e.currentTarget);
          setSubOptionActive(true);
        }}
        /*onMouseEnter={(e) => setSubOptionRef(e.currentTarget)}
        onMouseLeave={(e) => setSubOptionRef(null)}*/
      >
        <svg className="ref-icon mr-df">
          <use href="#add"/>
        </svg>
        Thêm vào playlist

      </MenuItem>

    </Menu>
    <Menu
      className="option-ref"
      id="basic-menu"
      anchorEl={subOptionRef}
      open={openSubOptionRef}
      onClose={() => {
        setSubOptionRef(null);
        setSubOptionActive(false);
        closeOption();
      }}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
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
      setSubOptionActive(false);
      closeOption();
    }} open={createPlaylist}/>
  </>;
};

