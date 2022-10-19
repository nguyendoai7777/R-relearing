import { FC } from 'react';
import { Button } from '@mui/material';

export interface NavButtonProps {
  id?: string;
  iconRef: string;
  text: string;
  onClick?: () => void;
  className?: string;
  color?: string;
}

export const NavButton: FC<NavButtonProps> = ({ iconRef, text, onClick, className, color = '#fff' }) => {
  return (
    <Button
      color="inherit"
      className={`nav-button flex align-items-center ${className}`}
      onClick={onClick}
      style={{ color }}
    >
      <svg className="nav-icon">
        <use href={`#${iconRef}`}/>
      </svg>
      <div className="nav-text">{text}</div>
    </Button>
  );
};
