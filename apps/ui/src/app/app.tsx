import './app.scss';
import { useAppSelector } from './states/store';
import { useState } from 'react';
import Navbar from './navbar/navbar';
import { selectCount } from './states/reducers/counter.slice';


export function App() {
  const count = useAppSelector(selectCount);
  return (
    <>
      <Navbar/>
      {/*<img className="most-visited-icon" src="https://qc-static.coccoc.com/a-images/88c/e1c/88ce1c3c7e58c8fe0f517528df8c50d9df42d53e6ad93affb2c6b7b2fd33efad.png" title="Avatar" width="100%" height="100%"/>*/}
      <img src="https://qc-static.coccoc.com/a-images/710/9e1/7109e1d4ee536dd4e9257603889511beb7b788f28cd05de07566d63d4e27eaac.jpg" alt=""/>
      <h1 className="my-first">tada</h1>
      <i style={{ color: 'deeppink' }}>my count</i>
      <>{count.status === 'idle' && (<div>
        {count.value}
      </div>)}
        {count.status !== 'idle' && (<div>
          ...loading
        </div>)}</>
      <pre color="deeppink">{count.status === 'idle' ? count.value : '...loading'}</pre>

      <div/>
    </>
  );
}

export default App;
