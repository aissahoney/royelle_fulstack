import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [dataHero, setDataHero] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hero/')
        .then(res => {
            setDataHero(res.data.heros)
            console.log('data hero', res.data.heros)
            // setUsers(res.data.users)
            // console.log('data users', res.data.users);
        })
        .catch(err => console.log(err))
}, [])

  return (
    <div className="">
      <Swiper
        centeredSlides={true}
        navigation={true}
        speed="3000"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* slider 1 */}
        {dataHero ? dataHero.map((hero,index) =>(
        <SwiperSlide key={index}>
          <div 
          // hero.image
            className=" w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-16 xl:pb-0 "
            data-aos="fade-down"
            style={{backgroundImage:`url('http://127.0.0.1:8000${hero.image}')`}}
          >
            <div className="font-Garamond 2xl:w-[720px] text-center">
              <ul className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
                {/* hero.rating */}
                {/* <ul className="flex items-center text-khaki space-x-[5px]"> */}
                      {[...Array(hero.rating)].map((item, index) => (
                        <li key={index}>
                          <FaStar  className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki" />
                        </li>
                ))}
                      {/* </ul> */}
              </ul>
              <h4 className="text-base mb-4">LUXURY HOTEL AND RESORT</h4>
              <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
                  THE BEST LUXURY HOTEL
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
                  {/* hero.city */}
                  IN {hero.city}
                </h1>
              </div>
              <Link to={"/about"}>
                <button
                  className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
              font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase"
                >
                  Discover More
                </button>
              </Link>
            </div>
            {/* contact info */}
            <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
              <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> 
              +980 123 4567
              890
            </div>
          </div>
        </SwiperSlide>
        )):null}
      </Swiper>
    </div>
  );
};

export default HeroSection;
