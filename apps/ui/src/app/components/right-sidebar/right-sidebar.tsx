import './right-sidebar.scss';
import { useEffect, useRef } from 'react';


export function RightSidebar() {
  const scopeStyle = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    scopeStyle.current?.setAttribute('__right_sidebar_style_scope', '');
  }, []);
  return (
    <div ref={scopeStyle} className="rsb-r">

      <div>Welcome to RightSidebar!</div>

    </div>
  );
};


export default RightSidebar;
