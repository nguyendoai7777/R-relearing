import './gallery.scss';
import { Link } from 'react-router-dom';
import { TOP_100_GALLERY_OBJ } from '@constants/mock.const';
import { useEffect, useState } from 'react';
import { uuid } from '@modules/feature.module';

export const Gallery = () => {
  const lineOne =[...TOP_100_GALLERY_OBJ[1], ...TOP_100_GALLERY_OBJ[1]];
  const lineTwo = [...TOP_100_GALLERY_OBJ[2], ...TOP_100_GALLERY_OBJ[2]];
  const lineThree = [...TOP_100_GALLERY_OBJ[3], ...TOP_100_GALLERY_OBJ[3]];
  useEffect(() => {
    /* const line1Interval = setInterval(() => {
       const remove = lineOne[1];
       setLineOne(prev => [...prev, remove])
       console.log(remove, lineOne);
     }, 2000)*/
    return () => {
    };
  }, []);

  return <div className="gallery-root">
   <div className="gallery-animate">
     <div className="animate-line">
       {lineOne.map((e, i) => <Link className={`gallery-nav ${i === 0 ? 'animate-entity' : ''}`} to={`album/${e.id}`} key={uuid()}><img src={e.artwork} alt=""/></Link>)}
     </div>
     <div className="animate-line">
       {lineTwo.map((e, i) => <Link className={`gallery-nav ${i === 0 ? 'animate-entity' : ''}`} to={`album/${e.id}`} key={uuid()}><img src={e.artwork} alt=""/></Link>)}
     </div>
     <div className="animate-line">
       {lineThree.map((e, i) => <Link className={`gallery-nav ${i === 0 ? 'animate-entity' : ''}`} to={`album/${e.id}`} key={uuid()}><img src={e.artwork} alt=""/></Link>)}
     </div>
   </div>
  </div>;
};


/*
<div className="gallery-auto-run">
  <div className="">
    <div className="line-box">
      {lineOne.map((e, i) => <Link className={`gallery-nav ${i === 0 ? 'auto-translate' : ''}`} to={`album/${e.id}`} key={uuid()}><img src={e.artwork} alt=""/></Link>)}
    </div>
  </div>
</div>;*/
