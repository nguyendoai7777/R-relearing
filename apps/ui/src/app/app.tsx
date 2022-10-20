import './app.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { APP_ROUTING } from './app.routing';
import Navbar from '@cpns/navbar/navbar';
import RightSidebar from '@cpns/right-sidebar/right-sidebar';
import LeftSidebar from '@cpns/left-sidebar/left-sidebar';
import { useAppSelector } from '@store/store';
import { selectCount } from '@store/slices/counter.slice';
import { useEffect } from 'react';
import { LOCAL_KEY } from '@constants/storage-key.const';
import { DEFAULT_THEME } from '@constants/theme.const';


export function App() {
  useEffect(() => {
    const ROOT = document.getElementById('root')!;
    ROOT.className = localStorage.getItem(LOCAL_KEY.SetBackground) || `${DEFAULT_THEME}-bg`;
    document.body.className = localStorage.getItem(LOCAL_KEY.SetTheme) || `${DEFAULT_THEME}-theme`;
  }, []);
  const count = useAppSelector(selectCount);
  return (
    <>
      <div className="d-flex">
        <LeftSidebar/>
        <div className="main">
          <Navbar/>
          <div className="scrollable-body my-scrollbar">
            <Routes>
              <Route path="*" element={<Navigate to="discovery" replace/>}/>
              <Route path="" element={<Navigate to="discovery" replace/>}/>
              {APP_ROUTING.map((route) => (<Route path={route.path} key={route.key} element={route.element}/>))}
            </Routes>
          </div>
        </div>
        <RightSidebar/>
      </div>
    </>
  );
}

export default App;
