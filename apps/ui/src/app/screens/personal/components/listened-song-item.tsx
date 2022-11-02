import { SongBase } from '@models/media.model';
import { ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { stopParentEvent } from '@modules/feature.module';
import DIconButton from '@cpns/icon-button/icon-button';
import React, { useState } from 'react';

interface CombinePropsWithBase {
  className?: string;
  onClick?: () => void;
  onOptionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  mode?: 'delete' | 'small-more';
}

type LHBProps = Omit<SongBase, 'songDuration' | 'listenTimes' | 'key' | 'index' | 'subArtist' | 'mediaUrl'>

export const ListenedSongItem = (pr: LHBProps & CombinePropsWithBase) => {
  return <div className={`listened-item fa-center ${pr.className ? pr.className : ''}`}>
    <ButtonBase className="justify-content-start RippleColorTheme">

      <img src={pr.artwork} alt=""/>
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
