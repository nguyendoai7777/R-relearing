import React from 'react';
import { Routes } from '@models/share.model';
import { DiscoveryScreen } from '@screens/dicovery/discovery';
import { PersonalScreen } from '@screens/personal/personal';
import { ZchartScreen } from '@screens/zchart/zchart';
import { Top100Screen } from '@screens/top-100/top-100';
import { CategoryScreen } from '@screens/category/category';
import { RadioScreen } from '@screens/radio/radio';
import { PlaylistScreen } from '@screens/playlist/playlist';
import { Profile } from '@screens/profile/profile';
import { Top100Album } from '@screens/top-100-album/top-100-album';

export const APP_ROUTING: Routes[] = [
  {
    name: 'Khám Phá',
    key: 'routes-id-1',
    path: 'discovery',
    element: React.createElement(DiscoveryScreen),

  },
  {
    name: 'Cá Nhân',
    key: 'routes-id-2',
    path: 'personal',
    element: React.createElement(PersonalScreen),

  },
  {
    name: 'Top 100',
    key: 'routes-id-5',
    path: 'top100',
    element: React.createElement(Top100Screen),

  },
  /* {
     name: '#zchart',
     key: 'routes-id-3',
     path: 'zchart',
     element: React.createElement(ZchartScreen),

   },

   {
     name: 'Radio',
     key: 'routes-id-4',
     path: 'radio',
     element: React.createElement(RadioScreen),

   },



   {
     name: 'Thể Loại',
     key: 'routes-id-6',
     path: 'category',
     element: React.createElement(CategoryScreen),

   },*/
];

export const NOT_NAV_ROUTING: Routes[] = [
  {
    name: 'Playlist',
    key: 'routes-id-7',
    path: 'playlist/:playlistId',
    element: React.createElement(PlaylistScreen),
  },
  {
    name: 'Nghệ sĩ',
    key: 'routes-id-8',
    path: 'profile/:artistId',
    element: React.createElement(Profile),
  },
  {
    name: 'Top 100',
    key: 'routes-id-9',
    path: '/top100/album/:top100Id',
    element: React.createElement(Top100Album),
  }
];
