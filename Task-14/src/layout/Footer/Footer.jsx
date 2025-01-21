const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-[#F6F6F8]">
      <div className="mx-auto max-w-7xl container">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex flex-col">
            <a href="/">
              <img
                alt="Logo"
                className="h-[26px]"
                src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
              />
            </a>
            <p className="mt-4 text-[#313131] text-[14px] font-normal">
              © 2025 Flone. <br /> All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium text-[16px] text-[#313131]">ABOUT US</h3>
            <ul className="mt-4 space-y-2 font-normal text-[14px] text-[#5d5d5d]">
              <li className="custom-transition hover:text-customPurple">
                <a href="/">About us</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Store location</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Contact</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Orders tracking</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium text-[16px] text-[#313131]">
              USEFUL LINKS
            </h3>
            <ul className="mt-4 space-y-2 font-normal text-[14px] text-[#5d5d5d]">
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Returns</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Support Policy</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Size guide</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-medium text-[16px] text-[#313131]">
              FOLLOW US
            </h3>
            <ul className="mt-4 space-y-2 font-normal text-[14px] text-[#5d5d5d]">
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Facebook</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Twitter</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Instagram</a>
              </li>
              <li className="custom-transition hover:text-customPurple">
                <a href="/">Youtube</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col flex-1 max-w-[300px]">
            <h3 className="font-medium text-[16px] text-[#313131]">
              SUBSCRIBE
            </h3>
            <p className="mt-4 text-[#7a7a7a] text-[14px]">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <input
              type="text"
              placeholder="Enter your email address..."
              className="mt-4 w-full py-3 text-[13px] bg-[#F6F6F8]  border-b border-[#ebebeb] placeholder:text-[#7a7a7a]
              outline-none"
            />
            <button className="text-[#313131] text-[14px] pt-2 border-b-2 border-[#9b9b9c] custom-transition hover:text-customPurple hover:border-customPurple flex w-[25%]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
