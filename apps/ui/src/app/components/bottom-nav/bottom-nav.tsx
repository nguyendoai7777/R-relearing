import { APP_ROUTING } from '../../app.routing';
import { ButtonBase } from '@mui/material';
import './bottom-nav.scss';
import { NavLink } from 'react-router-dom';

export const BottomNav = () => {

  return <div className="flex justify-between">
    {
      APP_ROUTING.map(e => <NavLink to={e.path!} className="bottom-nav-item">
        <ButtonBase centerRipple className="nav-overlay-root">
          <svg>
            <use href={`#${e.path}`} />
          </svg>
        </ButtonBase>
      </NavLink>)
    }

  </div>;
};
