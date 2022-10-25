import './personal.scss';
import { NavButton } from '@cpns/single-components/nav-button';
import { ListenedSongItem } from '@screens/personal/components/listened-song-item';
import { useAppSelector } from '@store/store';
import { selectListenedList } from '@store/slices/listened-history.slice';
import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

export const PersonalScreen = () => {
  const [optionRef, setOptionRef] = useState<null | HTMLElement>(null);
  const openOptionRef = Boolean(optionRef);
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
      }}>Profile</MenuItem>
      <MenuItem onClick={() => {
      }}>My account</MenuItem>
      <MenuItem onClick={() => {
      }}>Logout</MenuItem>
    </Menu>
  </>;
};
