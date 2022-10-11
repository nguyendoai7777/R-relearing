import './app.scss';
import Navbar from '@cpns/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTING } from './app.routing';


export function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        {APP_ROUTING.map((route) => (<Route path={route.path} key={route.key} element={route.element}/>))}
      </Routes>
    </>
  );
}

export default App;
