import { SongBase } from '@models/media.model';
import { GalleryInfinity } from '@models/share.model';
import { Mp3 } from '@constants/urls.constant';

export const DEFAULT_VOLUME = 50;

export const DIS_HISTORY_SEARCH = [
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/c/3/5/3/c3537dcaeb2c551b523f92344023680c.jpg',
    href: '../history/asdasdasdasd',
    id: 'dhs23s2asd4'
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/9/e/4/c/9e4c1683182e0a4c7394835da9c953a6.jpg',
    href: '../history/asdasdasda3f ',
    id: 'dhs23s2assds'
  },
];

export const DIS_RECOMMENDED_ARTIST = [
  {
    name: 'Nhí',
    img: 'https://i1.sndcdn.com/avatars-HiOWZCjLLUAE22g4-qaDRaw-t500x500.jpg',
    href: '/profile/Nhí',
    id: 'dhs23s2asd4'
  },
  {
    name: 'MIN',
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/5/1/9/15190f3abbd650c209dd74d1637d93eb.jpg',
    href: '../artist/MIN',
    id: 'dhs23ssdas2asd4'
  },
  {
    name: 'Grusi',
    img: 'https://i1.sndcdn.com/avatars-gI35Ax78Hau2znIh-gyZwFA-t500x500.jpg',
    href: '../artist/Grusi',
    id: 'dhs23ssdas21asasscd4'
  },
  {
    name: 'Dope B',
    img: 'https://i1.sndcdn.com/avatars-SN3X899waafiPkxJ-9p66ag-t500x500.jpg',
    href: '../artist/DopeB',
    id: 'dhs23ssdas222asd4'
  },
  {
    name: 'TiLo',
    img: 'https://yt3.ggpht.com/ytc/AMLnZu_cSfcgJFxzQvuTe6Lfjnxu6CrYSKnBVghHkIRv=s176-c-k-c0x00ffffff-no-rj-mo',
    href: '../artist/TiLo',
    id: 'dhs23swqesdas2asd4'
  },
  {
    name: 'dmixx',
    img: 'https://i1.sndcdn.com/avatars-fQyfBFFg97nHDJ9B-XhRXEg-t500x500.jpg',
    href: '../artist/dmixx',
    id: 'dhs23ssd11as2asd4'
  },
  {
    name: 'Linh Ku',
    img: 'https://i1.sndcdn.com/avatars-9gVnGERn3fqwjUKB-iUHxfw-t500x500.jpg',
    href: '../artist/LinhKu',
    id: 'dhs23ssdassxcc2asd4'
  },
];

export const DIS_STANDOUT_SONG_LIST: SongBase[] = [
  {
    id: Mp3.DieuToa.id,
    url: '/media/dieu-toa',
    mainArtist: {
      id: 'phao',
      name: 'Pháo',
      profileUrl: '/profile/Pháo'
    },
    artwork: 'https://i1.sndcdn.com/artworks-FZScX6URzWnyTa1Z-z8MRtA-t500x500.jpg',
    mediaUrl: Mp3.DieuToa.url,
    songName: 'Điêu Toa',
    songDuration: 311,
    listenTimes: '195.2k',
    subArtist: [
      {
        id: 'nhi',
        name: 'Nhí',
        profileUrl: '/profile/Nhí'
      },
      {
        id: 'timob',
        name: 'Timon',
        profileUrl: '/profile/Timon'
      }
    ]
  },
  {
    url: '/media/ANETAS',
    id: Mp3.ANETAS.id,
    mainArtist: {
      id: 'saabirose',
      name: 'Saabirose',
      profileUrl: '/profile/Saabirose'
    },
    artwork: 'https://i1.sndcdn.com/artworks-O1s6gMSfSx71nos2-x8N42g-t500x500.jpg',
    mediaUrl: Mp3.ANETAS.url,
    songName: '#ANETAS',
    songDuration: 270,
    listenTimes: '195.2k',
    subArtist: [
      {
        id: 'nhi',
        name: 'Nhí',
        profileUrl: '/profile/Nhí'
      },
      {
        id: 'timon',
        name: 'Timon',
        profileUrl: '/profile/Timon'
      }
    ]
  },
  {
    url: '/media/hoa-no-khong-mau',
    id: Mp3.HoaNoKMau.id,
    mainArtist: {
      id: 'ntbn',
      name: 'NTBN',
      profileUrl: '/profile/NTBN'
    },
    artwork: 'https://i1.sndcdn.com/artworks-wm48h3Evg0qzqlZg-0w1wSw-t500x500.jpg',
    mediaUrl: Mp3.HoaNoKMau.url,
    songName: 'Hoa Nở Không Màu',
    songDuration: 303,
    listenTimes: '195.2k',
    subArtist: [
      {
        id: 'tilo',
        name: 'TiLo',
        profileUrl: '/profile/TiLo'
      },
      {
        id: 'timon',
        name: 'Timon',
        profileUrl: '/profile/Timon'
      },
      {
        id: 'san',
        name: 'San',
        profileUrl: '/profile/San'
      },
      {
        id: 'nhi',
        name: 'Nhí',
        profileUrl: '/profile/Nhí'
      }
    ]
  },
  {
    url: '/media/xich-them-chut',
    id: Mp3.XichThemChut.id,
    mainArtist: {
      id: 'tlinh',
      name: 'TLinh',
      profileUrl: '/profile/TLinh'
    },
    artwork: 'https://i1.sndcdn.com/artworks-vyY6kcyCf4zQzqns-MTiGzg-t500x500.jpg',
    mediaUrl: Mp3.XichThemChut.url,
    songName: 'Xích Thêm Chút',
    songDuration: 251,
    listenTimes: '195.2k',
    subArtist: [
      {
        id: 'dmixx',
        name: 'dmixx',
        profileUrl: '/profile/dmixx'
      },
      {
        id: 'atrixx',
        name: 'ATrixx',
        profileUrl: '/profile/ATrixx'
      }
    ]
  },
  {
    url: '/media/dont-hurt',
    id: Mp3.DontHurt.id,
    mainArtist: {
      id: 'tilo',
      name: 'TiLo',
      profileUrl: '/profile/TiLo'
    },
    artwork: 'https://i1.sndcdn.com/artworks-000618197671-cmuxhh-t500x500.jpg',
    mediaUrl: Mp3.DontHurt.url,
    songName: 'Don\'t Hurt',
    songDuration: 265,
    listenTimes: '2.2M',
    subArtist: [
      {
        id: 'longnhat',
        name: 'Long-Nhật',
        profileUrl: '/profile/Long-Nhật'
      },
    ]
  },
  {
    url: '/media/vi-em-con-thuong',
    id: Mp3.ViEmConThuong.id,
    mainArtist: {
      id: 'lequyen',
      name: 'Lệ-Quyên',
      profileUrl: '/profile/Lệ-Quyên'
    },
    artwork: 'https://i1.sndcdn.com/artworks-000474463272-eg4f29-t500x500.jpg',
    mediaUrl: Mp3.ViEmConThuong.url,
    songName: 'Vì Em Còn Thương',
    songDuration: 280,
    listenTimes: '122.2k',
    subArtist: []
  }
];
export const generateSongsByAmount = (loop = 100) => {
  const l = [];
  for(let x = 0; x < loop/DIS_STANDOUT_SONG_LIST.length; x++) {
    l.push(...DIS_STANDOUT_SONG_LIST)
  }
  return l.slice(0, loop);
}
export const TOP_100_GALLERY_OBJ: {[key: string | number]: GalleryInfinity[]} = {
  1: [
    {
      id: 'top-100-gallery-0001',
      name: 'Hàn Xẻng',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/8/5/e285abc72419b762fa7f3fa03f14d223.jpg',
    },
    {
      id: 'top-100-gallery-0002',
      name: 'Phim Trung Cộng',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/2/b/102b88eaa17035b6c1247910d24a0054.jpg',
    },
    {
      id: 'top-100-gallery-0003',
      name: 'Audiophile',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/6/0/3d60491e7407321dbce823a2e8588b92.jpg',
    },
    {
      id: 'top-100-gallery-0004',
      name: 'Folk',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/8/d/5/48d556485a84f1100b561623075538b8.jpg',
    },
    {
      id: 'top-100-gallery-0005',
      name: 'Phim Âu Mỹ',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/3/8/ab389ff054099f722894413871b08644.jpg',
    },
    {
      id: 'top-100-gallery-00010',
      name: 'Rap Việt',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/b/f/a/4bfa0b4c173b33406b4d255e79941e5d.jpg',
    },
  ],
  2: [
    {
      id: 'top-100-gallery-0006',
      name: 'R&B',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/e/0/4/9e047c9d089c68f60bce31b20ff59a97.jpg',
    },
    {
      id: 'top-100-gallery-0007',
      name: 'Country',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/f/8/66f8ddb7b4b7fe2b1b4076ea2cd05c93.jpg',
    },
    {
      id: 'top-100-gallery-0008',
      name: 'Rap US',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/9/0/5/a9055dfa409c62d934ef333b61993f01.jpg',
    },
    {
      id: 'top-100-gallery-0009',
      name: 'Trẻ',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/e/8/f/8e8f611bf05e11db1bb7c39994048509.jpg',
    },
    {
      id: 'top-100-gallery-00010',
      name: 'Rap Việt',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/b/f/a/4bfa0b4c173b33406b4d255e79941e5d.jpg',
    },
    {
      id: 'top-100-gallery-00014',
      name: 'Rock',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/3/5/f835eb2eabde0ef0b687ee0e71e4a37e.jpg',
    },
  ],
  3: [
    {
      id: 'top-100-gallery-00011',
      name: 'Dance Việt',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/0/0/b800a8b039fd00210f54e58b3309b46f.jpg',
    },
    {
      id: 'top-100-gallery-0015',
      name: 'Lớp Mầm',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/c/9/4/fc94328a7c216b9d9c5eb1521f893709.jpg',
    },
    {
      id: 'top-100-gallery-00012',
      name: 'Sến',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/4/3/a/843ad75cffcf672c14e9d55a52f922cc.jpg',
    },
    {
      id: 'top-100-gallery-00013',
      name: 'Christian & Gospel',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/a/3/5/4a352cf9e92b9cc794c5d9cc8b35fa30.jpg',
    },
    {
      id: 'top-100-gallery-00014',
      name: 'Rock',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/3/5/f835eb2eabde0ef0b687ee0e71e4a37e.jpg',
    },
    {
      id: 'top-100-gallery-0005',
      name: 'Phim Âu Mỹ',
      release: '31/10/2022',
      artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/3/8/ab389ff054099f722894413871b08644.jpg',
    },
  ]
}

export const TOP_100_GALLERY = [
  {
    id: 'top-100-gallery-0001',
    name: 'Hàn Xẻng',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/8/5/e285abc72419b762fa7f3fa03f14d223.jpg',
  },
  {
    id: 'top-100-gallery-0002',
    name: 'Phim Trung Cộng',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/2/b/102b88eaa17035b6c1247910d24a0054.jpg',
  },
  {
    id: 'top-100-gallery-0003',
    name: 'Audiophile',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/6/0/3d60491e7407321dbce823a2e8588b92.jpg',
  },
  {
    id: 'top-100-gallery-0004',
    name: 'Folk',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/8/d/5/48d556485a84f1100b561623075538b8.jpg',
  },
  {
    id: 'top-100-gallery-0005',
    name: 'Phim Âu Mỹ',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/3/8/ab389ff054099f722894413871b08644.jpg',
  },
  {
    id: 'top-100-gallery-0006',
    name: 'R&B',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/e/0/4/9e047c9d089c68f60bce31b20ff59a97.jpg',
  },
  {
    id: 'top-100-gallery-0007',
    name: 'Country',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/e/0/4/9e047c9d089c68f60bce31b20ff59a97.jpg',
  },
  {
    id: 'top-100-gallery-0008',
    name: 'Rap US',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/9/0/5/a9055dfa409c62d934ef333b61993f01.jpg',
  },
  {
    id: 'top-100-gallery-0009',
    name: 'Trẻ',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/e/8/f/8e8f611bf05e11db1bb7c39994048509.jpg',
  },
  {
    id: 'top-100-gallery-00010',
    name: 'Rap Việt',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/b/f/a/4bfa0b4c173b33406b4d255e79941e5d.jpg',
  },
  {
    id: 'top-100-gallery-00011',
    name: 'Dance Việt',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/0/0/b800a8b039fd00210f54e58b3309b46f.jpg',
  },
  {
    id: 'top-100-gallery-0015',
    name: 'Lớp Mầm',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/c/9/4/fc94328a7c216b9d9c5eb1521f893709.jpg',
  },
  {
    id: 'top-100-gallery-00012',
    name: 'Sến',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/4/3/a/843ad75cffcf672c14e9d55a52f922cc.jpg',
  },
  {
    id: 'top-100-gallery-00013',
    name: 'Christian & Gospel',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/a/3/5/4a352cf9e92b9cc794c5d9cc8b35fa30.jpg',
  },
  {
    id: 'top-100-gallery-00014',
    name: 'Rock',
    release: '31/10/2022',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/3/5/f835eb2eabde0ef0b687ee0e71e4a37e.jpg',
  },
];
