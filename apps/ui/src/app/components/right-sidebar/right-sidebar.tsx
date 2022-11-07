import './right-sidebar.scss';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectMediaPlayer, setCurrentLists, setCurrentSong } from '@store/slices/media-player.slice';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { pushOne } from '@store/slices/listened-history.slice';
import { SongInDetail } from '@cpns/song-in-dt/song-in-detail';
import { uuid } from '@modules/feature.module';
import { SongBase } from '@models/media.model';
import { ButtonBase } from '@mui/material';


export function RightSidebar() {
  const scopeStyle = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { currentList, currentSong } = useAppSelector(selectMediaPlayer);
  const { playing } = useAppSelector(selectPlayState);

  const [expand, setExpand] = useState(false)

  const playSong = (e: SongBase) => {
    if (currentSong?.id === e.id) {
      dispatch(playing ? pause() : play());
    } else {
      dispatch(pause());
      dispatch(setCurrentSong(e));
      dispatch(pushOne(e));
      const delay = setTimeout(() => {
        dispatch(play());
        clearTimeout(delay);
      }, 100);
    }
  }
 const toggleExpand = () => {
   setExpand(!expand);
 }
  useEffect(() => {
    scopeStyle.current?.setAttribute('__right_sidebar_style_scope', '');
  }, []);
  return (
    <div ref={scopeStyle} className={`rsb-r${expand ? ' expand' : ''}`}>

      <div className="header-pai r-head fa-center relative">
        Danh sách phát
        <ButtonBase className="expand-right absolute" onClick={toggleExpand}>
          <svg><use href="#slide-prev" /></svg>
        </ButtonBase>
      </div>
      <div className="scrollable-body my-scrollbar ">

        {(currentList || []).length > 0 ?
          <>
            {currentList.map((e, i) => <SongInDetail
              onDbClick={() => playSong(e)}
              isPlaying={playing && currentSong?.id === e.id}
              className={currentSong?.id === e.id ? 'playing' : ''}
              onClick={() => playSong(e)}
              key={e.id + uuid()}
              url={e.url}
              mainArtist={e.mainArtist}
              subArtist={e.subArtist}
              artwork={e.artwork}
              songName={e.songName}
            />)}
          </>
          : <div>Trống</div>}

      </div>
    </div>
  );
}


export default RightSidebar;
