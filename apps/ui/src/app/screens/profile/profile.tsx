import { useEffect, useState } from 'react';
import './profile.scss';
import { ArtisProfile } from '@models/artist.model';
import { PROFILES } from '@constants/profile.const';
import { List100 } from '@screens/top-100/components/list/list';
import { nameConverter, uuid } from '@modules/feature.module';
import { useParams } from 'react-router-dom';

export const Profile = () => {
  const { artistId } = useParams();
  const [profile, setProfile] = useState<ArtisProfile>();

  useEffect(() => {
    const data = PROFILES.find(e => e.name === artistId);
    setProfile(data);
  }, [artistId]);

  return <div className="body-cc60">
    {profile ? <div className="flex">
      <div className="profile-col-left information">
        <div className="artwork">
          <img src={profile?.artwork} alt=""/>
        </div>
        <div className="name text-center">{nameConverter(profile?.name)}</div>
        <div className="real-name text-center">Tên thật: <i>{profile?.realName}</i></div>
        <div className="real-name text-center">Ngày sinh: <i className="specific-note">{profile?.birthdate}</i></div>
      </div>
      <div className="profile-col-right">
        <div className="description">{profile?.description}</div>
        <div className="sub-header-pai">Bài hát</div>
        {
          (profile?.songs.length || 0) > 0 && (profile?.songs || []).map((e => <List100
            isAtTop={false}
            key={e.id + uuid()}
            song={e}
          />))
        }
      </div>
    </div> : <div className='text-center'>Chưa làm data cho ngệ sĩ này!</div>}

  </div>;
};
