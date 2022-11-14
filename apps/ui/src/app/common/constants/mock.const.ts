import { SongBase } from '@models/media.model';
import { GalleryInfinity } from '@models/share.model';
import { Mp3 } from '@constants/urls.constant';

export const DEFAULT_VOLUME = 50;

export const DIS_HISTORY_SEARCH = [
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/c/3/5/3/c3537dcaeb2c551b523f92344023680c.jpg',
    href: '/profile/Hà-Nhi',
    id: 'hanhi'
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/9/e/4/c/9e4c1683182e0a4c7394835da9c953a6.jpg',
    href: '/profile/Lệ-Quyên',
    id: 'lequyen'
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

export const TOP_100_ALL: SongBase[] = [
  {
    url: '/media/trai-tim-ton-thuong',
    id: Mp3.TraiTimTonThuong.id,
    mainArtist: {
      id: 'lequyen',
      name: 'Lệ-Quyên',
      profileUrl: '/profile/Lệ-Quyên'
    },
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/b/7/1/4/b714f0e447b3ec8c9f903c4963e52422.jpg',
    mediaUrl: Mp3.TraiTimTonThuong.url,
    songName: 'Trái Tim Tổn Thương',
    songDuration: 321,
    listenTimes: '12k',
    subArtist: [],
    /*lyric: `
      <div class="lyric-line">Hôm nay em rất đau </div>
      <div class="lyric-line">Con tim như úa màu </div>
      <div class="lyric-line">Còn lại gì để vương vấn nữa đâu </div>
      <div class="lyric-line">Thôi đành buông tay </div>
      <div class="lyric-line">Hôm nay em rất đau </div>
      <div class="lyric-line">Con tim như nhũn nhàu </div>
      <div class="lyric-line">Đường vào như càng giá băng hơn </div>
      <div class="lyric-line">Em đã đánh mất cả thanh xuân </div>
      <div class="lyric-line">Chỉ để yêu một người vô tâm </div>
      <div class="lyric-line">Giờ đành tự mình lặng thầm </div>
      <div class="lyric-line">Xoá đi nỗi buồn </div>
      <div class="lyric-line">Anh mang theo cả trời bơ vơ </div>
      <div class="lyric-line">Ngu ngơ nước mắt càng vụn vỡ </div>
      <div class="lyric-line">Đợi chờ một cơn mưa </div>
      <div class="lyric-line">Xóa tan bao lầm lỡ </div>
      <div class="lyric-line">Càng thương nhớ càng thấy cô đơn </div>
      <div class="lyric-line">Càng níu giữ càng thấy xa hơn </div>
      <div class="lyric-line">Nỗi buồn cứ vương mang mãi trong lòng </div>
      <div class="lyric-line">Tàn phai giữa thế gian xoay vòng </div>
      <div class="lyric-line">Nhặt từng cánh rớt rơi </div>
      <div class="lyric-line">Hoa hồng bay theo gió mùa đông </div>
      <div class="lyric-line">Càng yếu đuối càng khóc lâu hơn </div>
      <div class="lyric-line">Càng mạnh mẽ càng thấy đau hơn </div>
      <div class="lyric-line">Lối về ấy hôm nay sao khác thường </div>
      <div class="lyric-line">Vài phút trước vẫn luôn chung đường </div>
      <div class="lyric-line">Giờ hai hướng hai nơi vô lường </div>
      <div class="lyric-line">Em ôm trái tim đã tổn thương </div>
      <div class="lyric-line">Em đã đánh mất cả thanh xuân </div>
      <div class="lyric-line">Chỉ để yêu một người vô tâm </div>
      <div class="lyric-line">Giờ đành tự mình lặng thầm </div>
      <div class="lyric-line">Xoá đi nỗi buồn </div>
      <div class="lyric-line">Anh mang theo cả trời bơ vơ </div>
      <div class="lyric-line">Ngu ngơ nước mắt càng vụn vỡ </div>
      <div class="lyric-line">Đợi chờ một cơn mưa </div>
      <div class="lyric-line">Xóa tan bao lầm lỡ </div>
      <div class="lyric-line">Càng thương nhớ càng thấy cô đơn </div>
      <div class="lyric-line">Càng níu giữ càng thấy xa hơn </div>
      <div class="lyric-line">Nỗi buồn cứ vương mang mãi trong lòng </div>
      <div class="lyric-line">Tàn phai giữa thế gian xoay vòng </div>
      <div class="lyric-line">Nhặt từng cánh rớt rơi </div>
      <div class="lyric-line">Hoa hồng bay theo gió mùa đông </div>
      <div class="lyric-line">Càng yếu đuối càng khóc lâu hơn </div>
      <div class="lyric-line">Càng mạnh mẽ càng thấy đau hơn </div>
      <div class="lyric-line">Lối về ấy hôm nay sao khác thường </div>
      <div class="lyric-line">Vài phút trước vẫn luôn chung đường </div>
      <div class="lyric-line">Giờ hai hướng hai nơi vô lường </div>
      <div class="lyric-line">Hôm nay trái tim đã tổn thương </div>
      <div class="lyric-line">Càng thương nhớ càng thấy cô đơn </div>
      <div class="lyric-line">Càng níu giữ càng thấy xa hơn </div>
      <div class="lyric-line">Nỗi buồn cứ vương mang mãi trong lòng </div>
      <div class="lyric-line">Tàn phai giữa thế gian xoay vòng </div>
      <div class="lyric-line">Nhặt từng cánh rớt rơi </div>
      <div class="lyric-line">Hoa hồng bay theo gió mùa đông </div>
      <div class="lyric-line">Càng yếu đuối càng khóc lâu hơn </div>
      <div class="lyric-line">Càng mạnh mẽ càng thấy đau hơn </div>
      <div class="lyric-line">Lối về ấy hôm nay sao khác thường </div>
      <div class="lyric-line">Vài phút trước vẫn luôn chung đường </div>
      <div class="lyric-line">Giờ hai hướng hai nơi vô lường </div>
      <div class="lyric-line">Hôm nay trái tim đã tổn thương </div>
      <div class="lyric-line">Em ôm trái tim đã tổn thương </div>
    `*/
  },
  {
    url: '/media/ai-roi-cung-se-khac',
    id: Mp3.AiRoiCungSeKhac.id,
    mainArtist: {
      id: 'hanhi',
      name: 'Hà-Nhi',
      profileUrl: '/profile/Hà-Nhi'
    },
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/e/7/a/a/e7aabe73d132476135be33977eeb1006.jpg',
    mediaUrl: Mp3.AiRoiCungSeKhac.url,
    songName: 'Ai Rồi Cũng Sẽ Khác',
    songDuration: 273,
    listenTimes: '85.5k',
    subArtist: [],
    /*lyric: `
      <div class="lyric-line">Ai rồi cũng sẽ khác </div>
      <div class="lyric-line">Theo tháng năm dần trôi </div>
      <div class="lyric-line">Yêu đến mấy cũng buông </div>
      <div class="lyric-line">Khi người ta thay lòng </div>
      <div class="lyric-line">Tin vào cả thế giới </div>
      <div class="lyric-line">Đến lúc em nhận ra </div>
      <div class="lyric-line">Bao câu hứa năm xưa tan vào mưa </div>
      <div class="lyric-line">Trong lòng em vẫn thế </div>
      <div class="lyric-line">Vẫn của anh ngày xưa </div>
      <div class="lyric-line">Nhưng anh đã quên em </div>
      <div class="lyric-line">Quên nụ hôn ban đầu </div>
      <div class="lyric-line">Bao chặng đường gian khó </div>
      <div class="lyric-line">Ta đã qua cùng nhau </div>
      <div class="lyric-line">Sao anh nói chia tay cho lòng đau </div>
      <div class="lyric-line">Rồi cũng đến lúc </div>
      <div class="lyric-line">Mình buông tay nhau </div>
      <div class="lyric-line">Hạnh phúc kết thúc </div>
      <div class="lyric-line">Chỉ một màu đen tối </div>
      <div class="lyric-line">Rồi nước mắt đã chạm đôi môi anh </div>
      <div class="lyric-line">Lệ chia ly tiếc nuối cho những gì </div>
      <div class="lyric-line">Ngày tháng có lẽ sẽ quên nhau thôi </div>
      <div class="lyric-line">Người chắc có lẽ </div>
      <div class="lyric-line">Không nặng lòng như tôi </div>
      <div class="lyric-line">Vậy thôi tôi đi tìm quên nơi xa </div>
      <div class="lyric-line">Tìm cách xóa đi </div>
      <div class="lyric-line">Dĩ vãng chưa phai nhòa </div>
      <div class="lyric-line">Ai rồi cũng sẽ khác </div>
      <div class="lyric-line">Theo tháng năm dần trôi </div>
      <div class="lyric-line">Yêu đến mấy cũng buông </div>
      <div class="lyric-line">Khi người ta thay lòng </div>
      <div class="lyric-line">Tin vào cả thế giới </div>
      <div class="lyric-line">Đến lúc anh nhận ra </div>
      <div class="lyric-line">Bao câu hứa năm xưa tan vào mưa </div>
      <div class="lyric-line">Trong lòng em vẫn thế </div>
      <div class="lyric-line">Vẫn của anh ngày xưa </div>
      <div class="lyric-line">Nhưng anh đã quên em </div>
      <div class="lyric-line">Quên nụ hôn ban đầu </div>
      <div class="lyric-line">Bao chặng đường gian khó </div>
      <div class="lyric-line">Ta đã qua cùng nhau </div>
      <div class="lyric-line">Sao anh nói chia ly cho lòng đau </div>
      <div class="lyric-line">Rồi cũng đến lúc </div>
      <div class="lyric-line">Mình buông tay nhau </div>
      <div class="lyric-line">Hạnh phúc kết thúc </div>
      <div class="lyric-line">Chỉ một màu đen tối </div>
      <div class="lyric-line">Rồi nước mắt đã chạm đôi môi em </div>
      <div class="lyric-line">Lệ chia ly tiếc nuối cho những gì </div>
      <div class="lyric-line">Ngày tháng có lẽ sẽ quên nhau thôi </div>
      <div class="lyric-line">Người chắc có lẽ </div>
      <div class="lyric-line">Không nặng lòng như tôi </div>
      <div class="lyric-line">Vậy thôi tôi đi tìm quên nơi xa </div>
      <div class="lyric-line">Tìm cách xóa đi </div>
      <div class="lyric-line">Dĩ vãng chưa phai nhòa </div>
      <div class="lyric-line">Rồi cũng đến lúc </div>
      <div class="lyric-line">Mình buông tay nhau </div>
      <div class="lyric-line">Hạnh phúc kết thúc </div>
      <div class="lyric-line">Chỉ một màu đen tối </div>
      <div class="lyric-line">Rồi nước mắt đã chạm đôi môi em </div>
      <div class="lyric-line">Lệ chia ly tiếc nuối cho những gì </div>
      <div class="lyric-line">Ngày tháng có lẽ sẽ quên nhau thôi </div>
      <div class="lyric-line">Người chắc có lẽ </div>
      <div class="lyric-line">Không nặng lòng như tôi </div>
      <div class="lyric-line">Vậy thôi tôi đi tìm quên nơi xa </div>
      <div class="lyric-line">Tìm cách xóa đi </div>
      <div class="lyric-line">Dĩ vãng chưa phai nhòa </div>
      <div class="lyric-line">Vậy thôi tôi đi tìm quên nơi xa </div>
      <div class="lyric-line">Tìm cách xóa đi </div>
      <div class="lyric-line">Dĩ vãng chưa phai nhòa </div>
    `*/
  },
  {
    url: '/media/co-don-tren-sofa',
    id: Mp3.CoDonTrenSofa.id,
    mainArtist: {
      id: 'hongocha',
      name: 'Hồ-Ngọc-Hà',
      profileUrl: '/profile/Hồ-Ngọc-Hà'
    },
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg',
    mediaUrl: Mp3.CoDonTrenSofa.url,
    songName: 'Cô Đơn Trên Sofa',
    songDuration: 263,
    listenTimes: '25.1k',
    subArtist: [],
    lyric: [
      {
        text: 'Cô đơn trên sofa, con tim như tan ra',
        time: 20
      },
      {
        text: 'Dẫn lối em trôi theo một khúc ca buồn',
        time: 24
      },
      {
        text: 'Giữa căn phòng, ánh đèn chợt tắt',
        time: 28
      },
      {
        text: 'Che đi giọt buồn sắp rơi',
        time: 31
      },
      {
        text: 'Cô đơn trên sofa, sao anh yêu cô ta?',
        time: 37
      },
      {
        text: 'Chẳng phải anh yêu em hơn cả anh mà?',
        time: 41
      },
      {
        text: 'Để cho thanh xuân này chợt tắt',
        time: 46
      },
      {
        text: 'Trên mi giọt nước mắt rơi',
        time: 48.68
      },
      {
        text: 'Thì ra là thế, tình nào là tình chẳng mờ phai tháng năm',
         time: 54.2
      },
      {
        text: 'Một ngày vẫn trôi, đôi môi em phai màu nắng',
        time: 58.4
      },
      {
        text: 'Nếu không em thì anh có buồn?',
        time: 62.4
      },
      {
        text: 'Hóa ra chỉ mình em đáng thương',
        time: 66.5
      },
      {
        text: 'Đừng buông lời hứa rồi lại vờ rằng dường như anh đã quên',
        time: 71
      },
      {
        text: 'Đừng tìm đến em gieo tương tư xong lại đi',
        time: 75
      },
      {
        text: 'Nắng xuyên qua hàng mi rối bời',
        time: 79.5
      },
      {
        text: 'Giữ tim em vài giây cuối thôi',
        time: 83.2
      },
      {
        text: 'Để em được ngã lưng lên một chiếc sofa',
        time: 87
      },
      {
        text: 'Để nghe một phút tim yên bình đến kỳ lạ',
        time: 91
      },
      {
        text: 'Để em được sống vô tư như một bông hoa, giữa bầu trời kiêu sa',
        time: 95
      },
      {
        text: 'Cho em thôi miệt mài nghĩ suy',
        time: 101
      },
      {
        text: 'Người ơi hãy nói em nghe một lý do đi',
        time: 104
      },
      {
        text: 'Vì sao lại để em vương sầu trên khóe mi?',
        time: 108
      },
      {
        text: 'Vì sao lại biến cô đơn thành giông tố, nỗi buồn sóng vỗ?',
        time: 112
      },
      {
        text: 'Tâm hồn em trôi lênh đênh trong căn phòng',
        time: 118
      },
      {
        text: 'Rồi lại rơi xuống trên sofa',
        time: 121.12
      },
      {
        text: 'Rồi lại rơi xuống trên sofa',
        time: 124.48
      },
      {
        text: 'Rồi lại rơi xuống trên sofa',
        time: 129.46
      },
      {
        text: 'Rồi lại rơi xuống trên sofa',
        time: 133.48
      },

      {
        text: 'Cô đơn trên sofa, sao anh yêu cô ta?',
        time: 138.72
      },
      {
        text: 'Chẳng phải anh yêu em hơn cả anh mà?',
        time: 143.54
      },
      {
        text: 'Để cho thanh xuân này chợt tắt',
        time: 147.55
      },
      {
        text: 'Trên mi giọt nước mắt rơi',
        time: 150.9
      },

      {
        text: 'Thì ra là thế, tình nào là tình chẳng mờ phai tháng năm',
        time: 155.46
      },
      {
        text: 'Một ngày vẫn trôi, đôi môi em phai màu nắng',
        time: 160.2
      },
      {
        text: 'Nếu không em thì anh có buồn?',
        time: 164.4
      },
      {
        text: 'Hóa ra chỉ mình em đáng thương',
        time: 168.16
      },
      {
        text: 'Đừng buông lời hứa rồi lại vờ rằng dường như anh đã quên',
        time: 173.09
      },
      {
        text: 'Đừng tìm đến em gieo tương tư xong lại đi',
        time: 177.21
      },
      {
        text: 'Nắng xuyên qua hàng mi rối bời',
        time: 181
      },
      {
        text: 'Giữ tim em vài giây cuối thôi',
        time: 185.57
      },
      {
        text: 'Để em được ngã lưng lên một chiếc sofa',
        time: 188.9
      },
      {
        text: 'Để nghe một phút tim yên bình đến kỳ lạ',
        time: 193.5
      },
      {
        text: 'Để em được sống vô tư như một bông hoa, giữa bầu trời kiêu sa',
        time: 197.66
      },
      {
        text: 'Cho em thôi miệt mài nghĩ suy',
        time: 202.9
      },
      {
        text: 'Người ơi hãy nói em nghe một lý do đi',
        time: 205.96
      },
      {
        text: 'Vì sao lại để em vương sầu trên khóe mi?',
        time: 210.35
      },
      {
        text: 'Vì sao lại biến cô đơn thành giông tố, nỗi buồn sóng vỗ?',
        time: 214.65
      },
      {
        text: 'Tâm hồn em trôi lênh đênh trong căn phòng',
        time: 220.11
      },
      {
        text: '[End - quẩy nhạc đi]',
        time: 223
      },
    ]
  },
  ...DIS_STANDOUT_SONG_LIST,
  {
    url: '/media/gac-lai-au-lo',
    id: Mp3.GacLaiAuLo.id,
    mainArtist: {
      id: 'miu-le',
      name: 'Miu-Lê',
      profileUrl: '/profile/Miu-Lê'
    },
    artwork: 'https://i1.sndcdn.com/artworks-4F34gYJVW9Qa4X0o-rv6uPA-t500x500.jpg',
    mediaUrl: Mp3.GacLaiAuLo.url,
    songName: 'Gác Lại Âu Lo',
    songDuration: 316,
    listenTimes: '2.23M',
    subArtist: [
      {
        id: 'san',
        name: 'San',
        profileUrl: '/profile/San'
      },
      {
        id: 'timon',
        name: 'Timon',
        profileUrl: '/profile/Timon'
      },
    ]
  },
  {
    url: '/media/in-the-dark',
    id: Mp3.InTheDark.id,
    mainArtist: {
      id: 'tia',
      name: 'Tia',
      profileUrl: '/profile/Tia'
    },
    artwork: 'https://i1.sndcdn.com/artworks-R2CiqpWpW7zLsveJ-5pBwzA-t500x500.jpg',
    mediaUrl: Mp3.InTheDark.url,
    songName: 'In The Dark',
    songDuration: 214,
    listenTimes: '1.03M',
    subArtist: [
      {
        id: 'ba',
        name: 'Bảo-Anh',
        profileUrl: '/profile/Bảo-Anh'
      },
      {
        id: 'timon',
        name: 'Timon',
        profileUrl: '/profile/Timon'
      },
      {
        id: 'nhi',
        name: 'Nhí',
        profileUrl: '/profile/Nhí'
      },
    ]
  },
  {
    url: '/media/vi-yeu-1-luc-3-anh',
    id: Mp3.ViYeu1Luc3Anh.id,
    mainArtist: {
      id: 'yen-le',
      name: 'Yến-Lê',
      profileUrl: '/profile/Yến-Lê'
    },
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/c/c/f/e/ccfe8b5a6fae272663e612daaa1e5208.jpg',
    mediaUrl: Mp3.ViYeu1Luc3Anh.url,
    songName: 'Vì Yêu Ai Đó Quá Nhiều',
    songDuration: 316,
    listenTimes: '2.23M',
    subArtist: [
      {
        id: 'dope-b',
        name: 'Dope-B',
        profileUrl: '/profile/Dope-B'
      },
      {
        id: 'timon',
        name: 'Timon',
        profileUrl: '/profile/Timon'
      },
      {
        id: 'vac',
        name: 'Vac',
        profileUrl: '/profile/Vac'
      },
    ]
  },
  {
    url: '/media/lung-lo',
    id: Mp3.LungLo.id,
    mainArtist: {
      id: 'y-tien',
      name: 'Ý-Tiên',
      profileUrl: '/profile/Ý-Tiên'
    },
    artwork: 'https://i1.sndcdn.com/artworks-000513902004-p24rpe-t500x500.jpg',
    mediaUrl: Mp3.LungLo.url,
    songName: 'Lửng Lơ',
    songDuration: 306,
    listenTimes: '5.53M',
    subArtist: [
      {
        id: 'tilo',
        name: 'TiLo',
        profileUrl: '/profile/TiLo'
      }
    ]
  },
];


export const generateSongsByAmount = (loop = 100) => {
  const l = [];
  for (let x = 0; x < loop / TOP_100_ALL.length; x++) {
    l.push(...TOP_100_ALL);
  }
  return l.slice(0, loop);
};
export const TOP_100_GALLERY_OBJ: { [key: string | number]: GalleryInfinity[] } = {
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
};

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
