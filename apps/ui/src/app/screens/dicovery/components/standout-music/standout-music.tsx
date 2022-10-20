import './standout-music.scss';
import { Link } from 'react-router-dom';

const Song = () => {
  return (
    <div className="standout-song fa-center fj-between cs-pointer">
      <div>
        <Link className="main-artist" to="tada">Pháo</Link>
        —
        <Link className="song-name" to="tada">Điêu Toa</Link>
        (<Link className="sub-artist" to="tada">Nhí</Link> x <Link className="sub-artist" to="tada">Timon</Link>)
      </div>
      <div className="tail fa-center">
        <div className="fas-info" style={{marginRight: '28px'}}>
          05:15
        </div>
        <div className="triangle-play"></div>
        <div className="fas-info">
          195.2k
        </div>
      </div>
    </div>
  );
};

export const StandoutMusic = () => {

  return <>
    <div className="standout-ms-box flex">
      <img src="https://i1.sndcdn.com/artworks-FZScX6URzWnyTa1Z-z8MRtA-t500x500.jpg" alt=""/>
      <div className="aud-list">
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
      </div>
    </div>
  </>;
};
