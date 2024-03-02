import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import React from "react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "./Slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import a from "../../assets/slider/a.jpg";
import b from "../../assets/slider/b.jpg";
import c from "../../assets/slider/c.jpg";
import d from "../../assets/slider/d.jpg";
import e from "../../assets/slider/e.jpg";
import f from "../../assets/slider/f.jpg";
import g from "../../assets/slider/g.jpg";
import h from "../../assets/slider/h.jpg";

const Slider = () => {
  return (
    <div className="main-container-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={a} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={e} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={f} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h} alt="" style={{ width: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
