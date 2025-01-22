import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SlideBanner = () => {
  return (
    <div>
      <div className="relative">
        <button className="custom-prev absolute left-[50px] sm:left-[80px] md:left-[130px] top-1/2 transform -translate-y-1/2 z-10 text-[24px] sm:text-[34px] md:text-[44px] text-[#F6F6F8] custom-transition hover:text-customPurple">
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="custom-next absolute right-[50px] sm:right-[80px] md:right-[130px] top-1/2 transform -translate-y-1/2 z-10 text-[24px] sm:text-[34px] md:text-[44px] text-[#F6F6F8] custom-transition hover:text-customPurple">
          <i className="ri-arrow-right-s-line"></i>
        </button>

        <Swiper
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div
                className="bg-cover bg-center h-[780px] w-full relative"
                style={{
                  backgroundImage:
                    "url('https://flone.jamstacktemplates.dev/assets/img/slider/slider-10-2.jpg')",
                }}
              >
                <div className="absolute w-full h-full top-[10%] left-[12%] sm:left-[8%] md:left-[10%] lg:left-[12%]">
                  <span className="text-[12px] sm:text-[14px] md:text-[16px] text-[#313131] font-medium">
                    New Arrivals
                  </span>
                  <h3 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#313131] font-medium mt-3 my-10 leading-tight">
                    Fresh Your Mind & <br />
                    Feeling Love
                  </h3>
                  <button className="banner-btn">SHOP NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div
                className="bg-cover bg-center h-[780px] w-full relative"
                style={{
                  backgroundImage:
                    "url('https://flone.jamstacktemplates.dev/assets/img/slider/slider-10.jpg')",
                }}
              >
                <div className="absolute w-full h-full top-[10%] left-[12%] sm:left-[8%] md:left-[10%] lg:left-[12%]">
                  <span className="text-[12px] sm:text-[14px] md:text-[16px] text-[#313131] font-medium">
                    Summer Collection
                  </span>
                  <h3 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#313131] font-medium mt-3 my-10 leading-tight">
                    Feel the Nature <br />
                    Inside You
                  </h3>
                  <button className="banner-btn">SHOP NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SlideBanner;
