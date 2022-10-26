import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import './create-playlist-dialog.scss';
import { CustomButtonContained, CustomButtonOutlined } from '@cpns/custom-buttom/button-custom-color';

export interface CreatePlaylistDialogProps {
  open: boolean;
  onClose: () => void;
}

export const CreatePlaylistDialog: FC<CreatePlaylistDialogProps> = ({ open, onClose }) => {
  const [focus, setFocus] = useState(false);
  const handleClose = () => {
  };

  const handleListItemClick = (value: string) => {

  };

  return (
    <Dialog onClose={onClose} open={open} className="popover-base create-playlist-dialog">
      <div className="d-wrapper">
        <i className="intro">Created by yourself</i>
        <br/>
        <div className="text-field-with-icon relative">
          <TextField
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            id="create-playlist"
            label="Standard"
            variant="standard"
          />
          <svg className={`create-icon ${focus ? 'focused' : ''}`}>
            <use href="#pen"/>
          </svg>
        </div>

        <div className="flex flex-end" style={{ marginTop: '24px' }}>
          <CustomButtonOutlined className="dialog-end-btn" hovercolor="B0B0B0FF" textcolor="grey" onClick={onClose} text="Đóng"/>
          <CustomButtonOutlined className="dialog-end-btn " hovercolor="B0B0B0FF" textcolor="var(--nav-active-detective)" text="Tạo" />
        </div>
      </div>
    </Dialog>
  );
};
