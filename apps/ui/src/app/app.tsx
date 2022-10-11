import React from 'react';
import './app.scss';
import Navbar from '@cpns/navbar/navbar';
import { selectCount } from '@store/slices/counter.slice';
import { useAppSelector } from '@store/store';
import * as CC from '@constants/urls.constant';

export function App() {
  const count = useAppSelector(selectCount);
  return (
    <>
      <Navbar/>
      {/*<img className="most-visited-icon" src="https://qc-static.coccoc.com/a-images/88c/e1c/88ce1c3c7e58c8fe0f517528df8c50d9df42d53e6ad93affb2c6b7b2fd33efad.png" title="Avatar" width="100%" height="100%"/>*/}
      <img src={CC.COC_COC_INIT_URL} alt=""/>
      <h1 className="my-first">tada</h1>
      <i style={{ color: 'deeppink' }}>my count</i>
      <pre color="deeppink">{count.status === 'idle' ? count.value : '...loading'}</pre>
      <div/>
    </>
  );
}

export default App;
