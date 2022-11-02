import './left-sidebar.scss';
import { NavButton } from '@cpns/single-components/nav-button';
import { APP_ROUTING } from '../../app.routing';
import { NavLink } from 'react-router-dom';
import { nameConverter } from '@modules/feature.module';


export function LeftSidebar() {
  const nav = () => {
  };
  return (
    <div className="lsb-r">
      <div className="logo"></div>
      {APP_ROUTING.map(e => (
        <NavLink to={e.path!} key={e.key} className='text-decoration-none nav-link-routing'>
          <NavButton className="cs-pointer" onClick={nav} iconRef={e.path!} text={nameConverter(e.name)} />
        </NavLink>
      ))}
    </div>
  );
}


export default LeftSidebar;
