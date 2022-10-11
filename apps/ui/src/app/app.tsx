import './app.scss';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTING } from './app.routing';
import Navbar from '@cpns/navbar/navbar';
import RightSidebar from '@cpns/right-sidebar/right-sidebar';
import LeftSidebar from '@cpns/left-sidebar/left-sidebar';


export function App() {
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
