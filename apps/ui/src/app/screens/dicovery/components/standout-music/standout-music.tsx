import './standout-music.scss';
import { Link } from 'react-router-dom';
import { DIS_STANDOUT_SONG_LIST } from '@constants/mock.const';
import { SongBase, SongItemProps } from '@models/media.model';
import { useAppDispatch } from '@store/store';
import { setCurrentLists, setCurrentSong } from '@store/slices/media-player.slice';
import { durationConverter, stopParentEvent } from '@modules/feature.module';
import { pause, play } from '@store/slices/play-state.slice';
import { pushOne } from '@store/slices/listened-history.slice';


const Song = (pr: SongItemProps) => {
  return (
    <div className="standout-song fa-center fj-between cs-pointer" onClick={pr.onClick}>
      <div className="flex" style={{ maxWidth: '70%' }}>
        <Link onClick={stopParentEvent} className="main-artist" to={pr.mainArtist.profileUrl}>{pr.mainArtist.name}</Link>
        —
        <span className="song-name name-oversize text-nowrap">{pr.songName}</span>
        {pr.subArtist.length > 0 && <>({
          pr.subArtist.map((sa, i) => (
            <span key={sa.id} className="divider-x text-nowrap">
              <Link onClick={stopParentEvent} className="sub-artist" to={sa.profileUrl}>{sa.name}</Link>
              <span className="div-x"> x&nbsp;</span>
            </span>
          ))
        })
        </>
        }
      </div>
      <div className="tail fa-center">
        <div className="fas-info" style={{ marginRight: '28px' }}>{durationConverter(pr.songDuration)}</div>
        <div className="triangle-play" style={{ transform: 'translateY(-1px)' }}></div>
        <div className="fas-info">{pr.listenTimes}</div>
      </div>
    </div>
  );
};

export const StandoutMusic = () => {
  const dispatch = useAppDispatch();
  return <>
    <div className="standout-ms-box flex">
      <img src="https://i1.sndcdn.com/artworks-FZScX6URzWnyTa1Z-z8MRtA-t500x500.jpg" alt=""/>
      <div className="aud-list">
        {DIS_STANDOUT_SONG_LIST.map((s) => <Song
            id={s.id}
            url={s.url}
            mediaUrl={s.mediaUrl}
            key={s.id}
            songDuration={s.songDuration}
            songName={s.songName}
            listenTimes={s.listenTimes}
            mainArtist={s.mainArtist}
            subArtist={s.subArtist}
            onClick={() => {
              dispatch(pause());
              dispatch(setCurrentSong(s));
              dispatch(pushOne(s));
              const delay = setTimeout(() => {
                dispatch(play());
                clearTimeout(delay);
              }, 100);
              dispatch(setCurrentLists(DIS_STANDOUT_SONG_LIST));
            }}
          />
        )}
      </div>
    </div>
  </>;
};
