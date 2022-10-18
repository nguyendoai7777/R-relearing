import { Button, ButtonProps } from '@mui/material';
import { ReactElement, useEffect, useRef } from 'react';

export interface IconButtonProps {
  children: ReactElement,
  siz?: string;
  ariaLabel?: string;
  cls?: string;
  shape?: 'circle' | 'box';
  ripplecolor?: string;
}

const DIconButton = (props: ButtonProps & IconButtonProps) => {
  return (
    <Button
      color='inherit'
      className={`icon-button-self ${props.cls}`}
      style={{
        borderRadius: props.shape === 'circle' ? '50%' : '3px',
        minWidth: props.siz ? props.siz : '40px',
        maxWidth: props.siz ? props.siz : '40px',
        maxHeight: props.siz ? props.siz : '40px',
        minHeight: props.siz ? props.siz : '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: props.ripplecolor
      }}
      aria-label={props.ariaLabel}
      variant="text"
      {...props}
    >
      <div style={{ width: '0' }}>&nbsp;</div>
      {props.children}
    </Button>
  );
};

export default DIconButton;
