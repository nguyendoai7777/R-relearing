import { Link } from 'react-router-dom';
import './song-in-dt.scss';

import { SongBase } from '@models/media.model';
import { ReactElement } from 'react';


interface CombinePropsWithBase {
  onClick: () => void;
  className?: string;
  isPlaying: boolean;
  onDelete?: () => void;
  children?: ReactElement
}

type Props = Partial<SongBase>

export const SongInDetail = (pr: Props & CombinePropsWithBase) => {
  return <div className={`fa-center sil ${pr.className ? pr.className : ''}`}>
    <div className="can-play" onClick={pr.onClick}>
      <img src={pr.artwork} alt=""/>
      <div className="playable">
        {
          pr.isPlaying ? <svg>
              <use href="#pauseable"/>
            </svg> :
            <svg>
              <use href="#playable"/>
            </svg>
        }
      </div>
      <div className="playable-overlay"></div>
    </div>
    <div className="detail fj-between flex-col">
      <Link className="text-decoration-none" to={pr.url!}>
        <div className="name text-ellipsis">{pr.songName}</div>
      </Link>
      <Link className="base-nav" to={pr.mainArtist?.profileUrl!}>
        <div className="artist">{pr.mainArtist?.name}</div>
      </Link>
      {
        pr.subArtist!.length > 0 && <div className="flex">
          {
            pr.subArtist?.map(e => <span className="sub-artist divider-x" key={e.id}>
                <Link className="base-nav" to={e.profileUrl}>{e.name}</Link>
                <span className="div-x">&nbsp;x&nbsp;</span>
              </span>
            )
          }
        </div>
      }
    </div>
    {pr.children && pr.children}
  </div>;
};
