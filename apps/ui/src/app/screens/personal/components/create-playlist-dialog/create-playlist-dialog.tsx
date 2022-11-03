import { FC, useState } from 'react';
import { Dialog, FormControl, Input, InputLabel } from '@mui/material';
import './create-playlist-dialog.scss';
import { CustomButtonOutlined } from '@cpns/custom-buttom/button-custom-color';
import { SongBase } from '@models/media.model';
import { useAppDispatch } from '@store/store';
import { createPlaylist } from '@store/slices/playlist.slice';
import { uuid } from '@modules/feature.module';

export interface CreatePlaylistDialogProps {
  open: boolean;
  onClose: () => void;
  currentSong?: SongBase | null;
}

export const CreatePlaylistDialog: FC<CreatePlaylistDialogProps> = ({ open, onClose, currentSong }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    onClose();
    setPlaylistName('');
    setInvalidName(false);
  };

  const handleListItemClick = (value: string) => {
  };

  const onCreate = () => {
    if (playlistName.length > 0) {
      dispatch(createPlaylist({
        playlistName,
        song: currentSong,
        id: uuid(),
      }));
      onClose();
      setPlaylistName('');
    } else {
      setInvalidName(true);
    }
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className="popover-base create-playlist-dialog">
      <div className="d-wrapper">
        <i className="intro">Created by yourself</i>
        <br/>
        <div className="text-field-with-icon relative">
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="create-playlist">Tên Playlist</InputLabel>
            <Input
              autoFocus
              error={invalidName}
              id="create-playlist"
              value={playlistName}
              onChange={(e) => {
                setInvalidName(!(e.currentTarget.value.length !== 0));
                setPlaylistName(e.currentTarget.value);
              }}
              endAdornment={
                <svg className="create-icon">
                  <use href="#pen"/>
                </svg>
              }
            />
          </FormControl>
          {invalidName && <div className="r-invalid invalid-content-input">Không được để trống</div>}
        </div>

        <div className="flex flex-end" style={{ marginTop: '24px' }}>
          <CustomButtonOutlined className="dialog-end-btn" hovercolor="B0B0B0FF" textcolor="grey" onClick={handleClose} text="Đóng"/>
          <CustomButtonOutlined className="dialog-end-btn " hovercolor="B0B0B0FF" textcolor="var(--nav-active-detective)" onClick={onCreate} text="Tạo"/>
        </div>
      </div>
    </Dialog>
  );

};
