import React from "react";

const SubscribeForm = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 mb-20">
        <div className="subscribe-form w-full max-w-2xl mx-auto text-center">
          <div>
            <h2 className="text-[48px] text-[#010101] font-normal">
              Subscribe
            </h2>
          </div>
          <div className="mt-2">
            <p className="text-[16px] text-[#696969]">
              Subscribe to our newsletter to receive news on update
            </p>
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="mt-4 w-full py-3 text-[13px]  border-b-2 border-[#ebebeb] placeholder:text-[#7a7a7a]
              outline-none text-center"
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="tracking-[2px] bg-[#ed59a0] text-[14px] text-white rounded-md px-10 py-3 custom-transition hover:bg-customPurple"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
