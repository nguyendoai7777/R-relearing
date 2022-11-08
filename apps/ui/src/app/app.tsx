import { useEffect } from 'react';
import './app.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MediaPlayer } from '@cpns/media-player/media-player';
import Navbar from '@cpns/navbar/navbar';
import RightSidebar from '@cpns/right-sidebar/right-sidebar';
import LeftSidebar from '@cpns/left-sidebar/left-sidebar';
import { LOCAL_KEY } from '@constants/storage-key.const';
import { DEFAULT_THEME } from '@constants/theme.const';
import { APP_ROUTING, NOT_NAV_ROUTING } from './app.routing';


export function App() {

  useEffect(() => {
    const ROOT = document.getElementById('root')!;
    ROOT.className = localStorage.getItem(LOCAL_KEY.SetBackground) || `${DEFAULT_THEME}-bg`;
    document.body.className = localStorage.getItem(LOCAL_KEY.SetTheme) || `${DEFAULT_THEME}-theme`;
  }, []);

  return (
    <>
      <div className="flex rx-content">
        <LeftSidebar/>
        <div className="main">
          <Navbar/>
          <div className="scrollable-body my-scrollbar">
            <Routes>
              <Route path="*" element={<Navigate to="discovery" replace/>}/>
              <Route path="" element={<Navigate to="discovery" replace/>}/>
              {APP_ROUTING.map((route) => (
                <Route path={route.path} key={route.key} element={route.element}/>
              ))}
              {NOT_NAV_ROUTING.map((route) => (
                <Route path={route.path} key={route.key} element={route.element}/>
              ))}
            </Routes>
          </div>
        </div>
        <RightSidebar />
      </div>
      <MediaPlayer/>

    </>
  );
}

export default App;
