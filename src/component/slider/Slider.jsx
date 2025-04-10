import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';

const Slider = () => {
  return (
    <div className=" mx-auto overflow-hidden shadow-lg">
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://mclaren.scene7.com/is/image/mclaren/07_GT_Front_34_Dynamic-1:crop-16x9?wid=1920&hei=1080)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-extrabold mb-4">Welcome to SmartCar Rental</h1>
                <p className="text-lg leading-relaxed mb-6">
                  Find the perfect ride for any journey – fast, affordable, and hassle-free. Book your car today and hit the road with confidence!
                </p>
                <Link to=''>
                  <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-md hover:bg-blue-600 transition">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-extrabold mb-4">Drive with Confidence!</h1>
                <p className="text-lg leading-relaxed mb-6">
                  Your journey starts here – rent a car in just a few clicks!
                </p>
                <Link to=''>
                  <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-md hover:bg-blue-600 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://carwow-uk-wp-2.imgix.net/2023-Koenigsegg-Jesko-Absolut-front.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-extrabold mb-4">Hit the Road with SmartCar Rentals!</h1>
                <p className="text-lg leading-relaxed mb-6">
                  Choose from a wide range of cars and book hassle-free today!
                </p>
                <Link to=''>
                  <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-md hover:bg-blue-600 transition">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next text-white !text-3xl !font-bold"></div>
        <div className="swiper-button-prev text-white !text-3xl !font-bold"></div>
      </Swiper>
    </div>

  );

};

export default Slider;