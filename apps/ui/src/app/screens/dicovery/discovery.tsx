import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './discovery.scss';
import { SLIDE_LIST } from '@constants/urls.constant';
import { Autoplay, SwiperOptions } from 'swiper';
import DIconButton from '@cpns/icon-button/icon-button';

const SWIPER_OPTION: SwiperOptions = {
  autoplay: true,
  loop: true,
  zoom: true,
  modules: [Autoplay],
  spaceBetween: 25,
  slidesPerView: 3,
};

export const DiscoveryScreen = () => {
  const swiperController = useSwiper();
  return (
    <div className="slide-gallery relative">
      <DIconButton
        className="slide-controller-btn cs-pointer flex-center-center"
        style={{ left: '-25px' }}
        siz="60px"
        onClick={() => swiperController.slidePrev()}
      >
        <svg>
          <use href="#slide-prev"/>
        </svg>
      </DIconButton>
      <DIconButton
        className="slide-controller-btn cs-pointer flex-center-center"
        style={{ right: '-25px' }}
        siz="60px"
        onClick={() => swiperController.slideNext()}
      >
        <svg style={{ transform: 'rotate(-180deg)' }}>
          <use href="#slide-prev"/>
        </svg>
      </DIconButton>
      <Swiper
        {...SWIPER_OPTION}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SLIDE_LIST.map(e =>
          <SwiperSlide className="slide-item" key={e.key}>
            <img src={e.img} alt=""/>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};
