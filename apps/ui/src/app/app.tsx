import './app.scss';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTING } from './app.routing';
import Navbar from '@cpns/navbar/navbar';
import RightSidebar from '@cpns/right-sidebar/right-sidebar';
import LeftSidebar from '@cpns/left-sidebar/left-sidebar';
import { useAppSelector } from '@store/store';
import { selectCount } from '@store/slices/counter.slice';
import { useEffect } from 'react';


export function App() {
  useEffect(() => {
    const ROOT = document.getElementById('root')!;
    ROOT.classList.add('has-img');
    ROOT.style.backgroundImage = 'url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/lisa.jpg)';
  }, []);
  const count = useAppSelector(selectCount);
  return (
    <>

      <div className="d-flex">
        <LeftSidebar/>
        <div className="main">
          <Navbar/>
          <Routes>
            {APP_ROUTING.map((route) => (<Route path={route.path} key={route.key} element={route.element}/>))}
          </Routes>
        </div>
        <RightSidebar/>
      </div>
    </>
  );
}

export default App;
