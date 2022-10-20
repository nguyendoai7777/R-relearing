import { Swiper, SwiperSlide } from 'swiper/react';
import './discovery.scss';
import { SLIDE_LIST } from '@constants/urls.constant';
import { Autoplay, SwiperOptions } from 'swiper';
import DIconButton from '@cpns/icon-button/icon-button';
import { useEffect, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { ButtonBase, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { DIS_HISTORY_SEARCH, DIS_RECOMMENDED_ARTIST } from '@constants/mock.const';
import { RecommendedArtist } from '@screens/dicovery/components/recommended-artist/recommended-artist';
import { NavButton } from '@cpns/single-components/nav-button';
import { StandoutMusic } from '@screens/dicovery/components/standout-music/standout-music';

const SWIPER_OPTION: SwiperOptions = {
  autoplay: true,
  loop: true,
  zoom: true,
  modules: [Autoplay],
  spaceBetween: 25,
  slidesPerView: 3,
};


export const DiscoveryScreen = () => {
  const [gallery, setGallery] = useState<typeof SLIDE_LIST[0][]>([]);
  const [swiperController, setSwiperController] = useState<SwiperClass>();
  useEffect(() => {
    setTimeout(() => {
      setGallery(SLIDE_LIST);
    }, 2000);
  }, []);
  return (
    <>
      <div className="slide-gallery relative">
        {gallery.length > 0 ?
          <>
            <DIconButton
              className="slide-controller-btn cs-pointer flex-center-center"
              style={{ left: '-25px' }}
              siz="60px"
              onClick={() => swiperController!.slidePrev()}
            >
              <svg>
                <use href="#slide-prev"/>
              </svg>
            </DIconButton>
            <DIconButton
              className="slide-controller-btn cs-pointer flex-center-center"
              style={{ right: '-25px' }}
              siz="60px"
              onClick={() => swiperController!.slideNext()}
            >
              <svg style={{ transform: 'rotate(-180deg)' }}>
                <use href="#slide-prev"/>
              </svg>
            </DIconButton>
            <Swiper
              style={{ 'borderRadius': '10px', height: '250px' }}
              {...SWIPER_OPTION}
              onSwiper={(swiper) => setSwiperController(swiper)}
            >
              {gallery!.map(e =>
                <SwiperSlide
                  className="slide-item"
                  key={e.key}>
                  <img src={e.img} style={{ userSelect: 'none' }} alt=""/>
                </SwiperSlide>
              )}
            </Swiper>
          </> :
          <div className="fj-between">
            <Skeleton className="skeleton-4-slide" animation="wave" variant="rounded" height={250}/>
            <Skeleton className="skeleton-4-slide" animation="wave" variant="rounded" height={250}/>
            <Skeleton className="skeleton-4-slide" animation="wave" variant="rounded" height={250}/>
          </div>
        }
      </div>
      <div className="body-cc60">
        <div className="g-body">
          <div className="header-pai fj-between">
            Nhạc Nổi Bật
            <NavButton color="var(--scrollbar-color)" text="Xem Thêm" textColor="var(--normal-text-color)"/>
          </div>
          <StandoutMusic/>
        </div>
        <div className="g-body">
          <div className="header-pai">Nghệ Sĩ đang theo dõi</div>
          <div className="history-box-group flex flex-wrap">
            {DIS_HISTORY_SEARCH.map(e => <Link className="history-item" key={e.id} to={e.href}>
              <ButtonBase className="force-white-color">
                <img src={e.img} alt=""/>
              </ButtonBase>
            </Link>)}
          </div>
        </div>
        <div className="g-body">
          <div className="header-pai fj-between">
            Nghệ Sĩ Đề Xuất
            <NavButton color="var(--scrollbar-color)" text="Xem Thêm" textColor="var(--normal-text-color)"/>
          </div>
          <div className="artist-box-group flex flex-wrap">
            {DIS_RECOMMENDED_ARTIST.map(e => <RecommendedArtist img={e.img} href={e.href} name={e.name} key={e.id}/>)}
          </div>
        </div>

      </div>
    </>
  );
};
