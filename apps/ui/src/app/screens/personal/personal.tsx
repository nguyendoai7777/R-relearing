import './personal.scss';
import { NavButton } from '@cpns/single-components/nav-button';
import { ListenedSongItem } from '@screens/personal/components/listened-song-item';
import { useAppSelector } from '@store/store';
import { selectListenedList } from '@store/slices/listened-history.slice';
import React, { useState } from 'react';
import { Menu, MenuItem, Paper } from '@mui/material';
import { CreatePlaylistDialog } from '@screens/personal/components/create-playlist-dialog';

export const PersonalScreen = () => {
  const [optionRef, setOptionRef] = useState<null | HTMLElement>(null);
  const [subOptionRef, setSubOptionRef] = useState<null | HTMLElement>(null);
  const [subOptionActive, setSubOptionActive] = useState(false);
  const [createPlaylist, setCreatePlaylist] = useState(true);
  const openOptionRef = Boolean(optionRef);
  const openSubOptionRef = Boolean(subOptionRef);
  const { currentHistoryList } = useAppSelector(selectListenedList);
  const { artwork, songName, mainArtist } = currentHistoryList[0];
  const closeOption = () => {
    setOptionRef(null);
  };
  return <>
    <div className="body-cc60">
      <div className="header-pai fj-between align-items-center">
        Đã nghe gần đây
        <NavButton color="var(--scrollbar-color)" text="Xem Thêm" textColor="var(--normal-text-color)"/>
      </div>
      <div className="flex flex-wrap listened-list" style={{ marginTop: '14px' }}>
        {
          currentHistoryList.length > 0 ? <>
            {
              currentHistoryList.map(e => <ListenedSongItem
                key={e.key}
                onClick={() => {
                }}
                artwork={e.artwork}
                url={e.url}
                mainArtist={e.mainArtist}
                songName={e.songName}
                onOptionClick={(e) => {
                  setOptionRef(e.currentTarget);
                }}
              />)
            }
          </> : <div>Trống</div>
        }
      </div>
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
      <MenuItem onClick={() => {
      }}>
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
      <MenuItem onClick={() => {
      }}>
        <svg className="ref-icon mr-df">
          <use href="#playlist"/>
        </svg>
        alals</MenuItem>

    </Menu>
    <CreatePlaylistDialog onClose={() => setCreatePlaylist(false)} open={createPlaylist}  />
  </>;
};
