import './top-100.scss';
import { Gallery } from '@screens/top-100/components/gallery/gallery';
import { List100 } from '@screens/top-100/components/list/list';
import { DIS_STANDOUT_SONG_LIST, generateSongsByAmount } from '@constants/mock.const';
import { uuid } from '@modules/feature.module';
import { useEffect, useState } from 'react';
import { ButtonBase } from '@mui/material';
import { useAppDispatch } from '@store/store';
import { setCurrentLists } from '@store/slices/media-player.slice';


export const Top100Screen = () => {
  const song10 = generateSongsByAmount(10).map(e => ({ ...e, id: uuid() }));
  const song100 = generateSongsByAmount(100).map(e => ({ ...e, id: uuid() }));
  const [songs, setSongs] = useState(song10);
  const [mount, setMount] = useState(false);
  const dispatch = useAppDispatch();
  const setList = () => {
    setMount(!mount);
  };

  useEffect(() => {
    setSongs(mount ? song100 : song10);
  }, [mount]);


  /*const [contextMenu, setContextMenu] = useState<MousePosition | null>(null);

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setContextMenu({
        mouseX: event.clientX,
        mouseY: event.clientY,
      }
    );
  };*/
  return <>
    <div className="body-cc60">
      <div className="header-pai">Nhạc Việt Hôm Nay</div>
      <div>
        {songs.map((e, i) => <List100
          key={e.id}
          index={i + 1}
          song={e}
          onPlay={() => dispatch(setCurrentLists(songs))}
        />)}
      </div>
      <div className="flex justify-content-center">
        <ButtonBase className="load-btn" onClick={setList}>{mount ? 'Thu Gọn' : 'Xem 100'}</ButtonBase>
      </div>
      <div className="header-pai">Khám phá TOP 100</div>
      <Gallery/>
    </div>
    {/*
    <ContextMenu open={contextMenu !== null} position={contextMenu}>eadasd</ContextMenu>
*/}
  </>;
};
