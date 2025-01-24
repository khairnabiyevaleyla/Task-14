import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper/modules";

const Testemonials = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <div className="grid grid-cols-1">
          <SwiperSlide>
            <div className="w-full md:w-[700px] lg:w-[976px] h-auto flex flex-col justify-center items-center mx-auto gap-5">
              <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
                <img
                  src="https://flone.jamstacktemplates.dev/assets/img/testimonial/testi-1.png"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-[#575757] text-[14px] md:text-[16px] font-medium text-center leading-[24px] md:leading-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div>
                <i className="ri-signpost-line text-[#575757] text-[24px] md:text-[35px]"></i>
              </div>
              <div className="text-center">
                <p className="text-[#010101] text-[12px] md:text-[14px] secondfont tracking-[1.2px] md:tracking-[1.5px]">
                  JOHN DOE
                </p>
                <span className="text-[#010101] text-[12px] md:text-[14px] secondfont tracking-[1.2px] md:tracking-[1.5px]">
                  customer
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full md:w-[700px] lg:w-[976px] h-auto flex flex-col justify-center items-center mx-auto gap-5">
              <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
                <img
                  src="https://flone.jamstacktemplates.dev/assets/img/testimonial/testi-2.png"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-[#575757] text-[14px] md:text-[16px] font-medium text-center leading-[24px] md:leading-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div>
                <i className="ri-signpost-line text-[#575757] text-[24px] md:text-[35px]"></i>
              </div>
              <div className="text-center">
                <p className="text-[#010101] text-[12px] md:text-[14px] secondfont tracking-[1.2px] md:tracking-[1.5px]">
                  GRACE ALVARDO
                </p>
                <span className="text-[#010101] text-[12px] md:text-[14px] secondfont tracking-[1.2px] md:tracking-[1.5px]">
                  customer
                </span>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Testemonials;
