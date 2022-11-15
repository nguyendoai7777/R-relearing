import './personal.scss';
import React, { useState } from 'react';
import { ButtonBase } from '@mui/material';
import { ListenedHistory } from '@screens/personal/components/listened-history/listened-history';
import { CreatePlaylistDialog } from '@screens/personal/components/create-playlist-dialog/create-playlist-dialog';
import { Playlist } from '@screens/personal/components/playlist/playlist';

export const PersonalScreen = () => {
  const [createPlaylist, setCreatePlaylist] = useState(false);

  return <>
    <div className="my-scrollbar ml-scroll-left personal">
      <div className="ml-scroll-right">
        <div className="header-pai fj-between align-items-center">
          Đã nghe gần đây
          <ButtonBase className="heading-button">
            <div className="text">Xem Thêm</div>
            <svg className="rotate-180">
              <use href="#slide-prev"/>
            </svg>
          </ButtonBase>
        </div>
        <ListenedHistory/>
        <div className="header-pai fj-between align-items-center">
          PlayList
          <ButtonBase className="heading-button" onClick={() => setCreatePlaylist(true)}>
            <div className="text">Tạo mới</div>
            <svg>
              <use href="#add"/>
            </svg>
          </ButtonBase>
        </div>
        <Playlist/>
      </div>
    </div>
    <CreatePlaylistDialog onClose={() => setCreatePlaylist(false)} open={createPlaylist}/>
  </>;
};
