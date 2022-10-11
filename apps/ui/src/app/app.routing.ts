import React from 'react';
import { Routes } from '@models/share.model';
import Home from '@screens/home/home';

export const APP_ROUTING: Routes[] = [
  {
    key: 'routes-id-1',
    path: '',
    element: React.createElement(Home)
  }
];
