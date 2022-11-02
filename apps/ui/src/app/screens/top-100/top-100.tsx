import './top-100.scss';
import { Gallery } from '@screens/top-100/components/gallery/gallery';
import { ContextMenu, List100 } from '@screens/top-100/components/list/list';
import { generateSongsByAmount } from '@constants/mock.const';
import { uuid } from '@modules/feature.module';
import { MouseEvent, useCallback, useState } from 'react';
import { ButtonBase } from '@mui/material';
import { MousePosition } from '@models/theme.model';


export const Top100Screen = () => {
  const [songs, setSongs] = useState(generateSongsByAmount(10));
  const setList = () => {

    setSongs(generateSongsByAmount(100));
  };

  const [contextMenu, setContextMenu] = useState<MousePosition | null>(null);

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setContextMenu({
        mouseX: event.clientX,
        mouseY: event.clientY,
      }
    );
  };
  return <>
    <div className="body-cc60">
      <div className="header-pai">Nhạc Việt Hôm Nay</div>
      <div>
        {songs.map((e, i) => <List100
          key={e.id + uuid()}
          index={i + 1}
          song={e}
        />)}
      </div>
      <div className="flex justify-content-center">
        <ButtonBase className="load-btn" onClick={setList}>Xem 100</ButtonBase>
      </div>
      <div className="header-pai">Khám phá TOP 100</div>
      <div><Gallery/></div>
    </div>
    <ContextMenu open={contextMenu !== null} position={contextMenu}>eadasd</ContextMenu>
  </>;
};
