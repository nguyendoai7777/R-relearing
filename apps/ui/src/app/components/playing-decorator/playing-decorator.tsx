import './playing-decorator.scss';
import { useAppDispatch, useAppSelector } from '@store/store';
import { pause, play, selectPlayState } from '@store/slices/play-state.slice';
import { selectMediaPlayer } from '@store/slices/media-player.slice';
import { CSSProperties, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface PlayingDecoratorProps {
  className?: string;
  style?: CSSProperties;
}

export const PlayingDecorator = (pr: PlayingDecoratorProps) => {
  const [clicked, setClicked] = useState(0);
  const { playing } = useAppSelector(selectPlayState);
  const mediaSelector = useAppSelector(selectMediaPlayer);
  const crs = mediaSelector.currentSong;
  const dispatch = useAppDispatch();

  const setPlaying = () => {
    dispatch(playing ? pause() : play());
  };

  useEffect(() => {
    if(playing) {
      setClicked(2)
    } else {
      setClicked(clicked + 1);
    }
  }, [playing]);
  
  return <div {...pr} className={`decorate-box${playing ? ' is-play' : ''} ${pr.className ? ' '+pr.className : ''}`}>
    <div className="decorator relative">
      <div
        className={`decorate-thumb cs-pointer relative ${playing ? 'playing' : ''} ${(!playing && clicked > 1) ? 'off' : ''}`}
        onClick={setPlaying}
      >
        <img className="decorate-img" src={crs?.artwork} alt=""/>
        <div className="decorate-thumb-overlay absolute"></div>

      </div>
      {playing && <svg className="playing-ic-wa absolute-center">
        <use href="#playing-animate"/>
      </svg>}
      <svg className={`playing-ic-wa dc-playable absolute-center ${playing ? 'hidden' : ''}`}>
        <use href="#playable"/>
      </svg>
    </div>
    <div className="flex flex-col align-items-center decorator">
      <div className="dc-name">{crs?.songName}</div>
      <Link className="dc-ar base-nav" to={crs?.mainArtist!.profileUrl!}>{crs?.mainArtist.name}</Link>
      <div className="dc-sb-ar flex flex-wrap">
        {crs?.subArtist.length! > 0 && crs?.subArtist.map(e => <div className='flex divider-x' key={e.id}>
          <Link to={e.profileUrl} className='base-nav'>{e.name}</Link>
          <span className="div-x">&nbsp;x&nbsp;</span>
        </div>)}
      </div>
      <div className="release">Phát hành: 29/04/2022</div>
    </div>

  </div>;
};

