import { SongBase } from '@models/media.model';
import { ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { stopParentEvent } from '@modules/feature.module';
import DIconButton from '@cpns/icon-button/icon-button';
import React, { MouseEvent } from 'react';
import { useAppSelector } from '@store/store';
import { mediaPlayerSlice, selectMediaPlayer } from '@store/slices/media-player.slice';

interface CombinePropsWithBase {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onOptionClick: (e: MouseEvent<HTMLButtonElement>) => void;
  mode?: 'delete' | 'small-more';
  isPlaying?: boolean;
}

type LHBProps = Omit<SongBase, 'songDuration' | 'listenTimes' | 'key' | 'index' | 'subArtist' | 'mediaUrl'>

export const ListenedSongItem = (pr: LHBProps & CombinePropsWithBase) => {
  const { currentSong } = useAppSelector(selectMediaPlayer);
  return <div className={`listened-item fa-center ${pr.className ? pr.className : ''} ${currentSong?.id === pr.id ? 'selected' : ''}`}>
    <ButtonBase className="justify-content-start RippleColorTheme" onClick={(e) => {
      pr.onClick && pr.onClick(e);
    }}>
      <div className="relative inline-flex">
        <img src={pr.artwork} alt=""/>
        {pr.isPlaying &&
          <svg className="playing-animate absolute-center">
            <use href="#playing-animate"/>
          </svg>}
      </div>
      <div className="info flex flex-col">
        <Link className="text-decoration-none name text-ellipsis" to={pr.url} onClick={stopParentEvent}>
          {pr.songName}
        </Link>
        <Link className="base-nav artist" to={pr.mainArtist.profileUrl} onClick={stopParentEvent}>{pr.mainArtist.name}</Link>
      </div>
    </ButtonBase>
    <DIconButton
      className={`lde RippleColorTheme`}
      shape="box"
      onClick={pr.onOptionClick}
    >
      <svg>
        <use href={`#${!pr.mode ? 'small-more' : 'delete'}`}/>
      </svg>
    </DIconButton>
  </div>;
};
