import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SlideBanner = () => {
  return (
    <div>
      <div className="relative">
        {/* Navigation Buttons */}
        <button className="custom-prev absolute left-[20px] sm:left-[50px] md:left-[80px] lg:left-[130px] top-1/2 transform -translate-y-1/2 z-10 text-[18px] sm:text-[24px] lg:text-[34px] text-[#F6F6F8] custom-transition hover:text-customPurple">
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="custom-next absolute right-[20px] sm:right-[50px] md:right-[80px] lg:right-[130px] top-1/2 transform -translate-y-1/2 z-10 text-[18px] sm:text-[24px] lg:text-[34px] text-[#F6F6F8] custom-transition hover:text-customPurple">
          <i className="ri-arrow-right-s-line"></i>
        </button>

        {/* Swiper Slider */}
        <Swiper
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div>
              <div
                className="bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[780px] w-full relative"
                style={{
                  backgroundImage:
                    "url('https://flone.jamstacktemplates.dev/assets/img/slider/slider-10-2.jpg')",
                }}
              >
                <div className="absolute w-[90%] h-full top-[10%] left-[5%] sm:left-[8%] md:left-[10%] lg:left-[12%]">
                  <span className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#313131] font-medium">
                    New Arrivals
                  </span>
                  <h3 className="text-[20px] sm:text-[28px] md:text-[40px] lg:text-[56px] text-[#313131] font-medium mt-3 my-4 sm:my-6 md:my-10 leading-tight">
                    Fresh Your Mind & <br />
                    Feeling Love
                  </h3>
                  <button className="banner-btn px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[12px] sm:text-[14px] lg:text-[16px]">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div>
              <div
                className="bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[780px] w-full relative"
                style={{
                  backgroundImage:
                    "url('https://flone.jamstacktemplates.dev/assets/img/slider/slider-10.jpg')",
                }}
              >
                <div className="absolute w-[90%] h-full top-[10%] left-[5%] sm:left-[8%] md:left-[10%] lg:left-[12%]">
                  <span className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#313131] font-medium">
                    Summer Collection
                  </span>
                  <h3 className="text-[20px] sm:text-[28px] md:text-[40px] lg:text-[56px] text-[#313131] font-medium mt-3 my-4 sm:my-6 md:my-10 leading-tight">
                    Feel the Nature <br />
                    Inside You
                  </h3>
                  <button className="banner-btn px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[12px] sm:text-[14px] lg:text-[16px]">
                    SHOP NOW
                  </button>
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
