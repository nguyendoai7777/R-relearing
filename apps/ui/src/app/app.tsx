import './app.scss';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTING } from './app.routing';
import Navbar from '@cpns/navbar/navbar';
import RightSidebar from '@cpns/right-sidebar/right-sidebar';
import LeftSidebar from '@cpns/left-sidebar/left-sidebar';
import { useAppSelector } from '@store/store';
import { selectCount } from '@store/slices/counter.slice';


export function App() {
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

      {/*count.status === 'loading' ? (<h1>loading</h1>) : (<h1>{count.value}</h1>)*/}
     {/* {count.status === 'loading' && (<h1>loading</h1>) }
      {count.status !== 'loading' && (<h1>{count.value}</h1>) }*/}
      <h1>{count.status === 'loading' ? 'loading...' : count.value}</h1>
    </>
  );
}

export default App;
