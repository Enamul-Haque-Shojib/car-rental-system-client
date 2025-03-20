import React from 'react';
import { useEffect, useState } from 'react';


import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const feedbackData = [
    {
        id:'1',
        feedbackUserPhoto:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
        name: 'Michel Jams',
        lifeStyle:'Engineering',
        feedBack:'The car rental system is very efficient and user-friendly. I loved the seamless booking experience. I highly recommend this service for anyone looking for a hassle-free car rental experience.'
    },
    {
        id:'2',
        feedbackUserPhoto:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
        name: 'David Smith',
        lifeStyle:'Frequent Traveler',
        feedBack:'I recently used this car rental service for a week-long trip, and I must say it exceeded my expectations. The pricing was reasonable, the vehicle selection was impressive, and the rental process was straightforward. The return process was equally smooth, with no unnecessary delays. I appreciate the transparency in billing with no hidden charges'
    },
    {
        id:'3',
        feedbackUserPhoto:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
        name: 'Sophia Martinez',
        lifeStyle:'Business Consultant',
        feedBack:'I booked a luxury car for a business meeting, and the experience was phenomenal. The vehicle was clean, well-maintained, and delivered on time. The online reservation system was easy to use, and I appreciated the real-time tracking feature for my rental. The company’s commitment to customer satisfaction is commendable!'
    },
    {
        id:'4',
        feedbackUserPhoto:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
        name: 'Robert Williams',
        lifeStyle:'Adventure Enthusiast',
        feedBack:'I rented an SUV for an off-road adventure, and I was truly impressed by the quality of the vehicle. It was in top condition, equipped with all necessary safety features, and performed exceptionally well on rough terrains. The rental service was reliable, and I had a great experience from start to finish!'
    },
    {
        id:'5',
        feedbackUserPhoto:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
        name: 'Emma Johnson',
        lifeStyle:'Family Traveler',
        feedBack:'My family and I rented a minivan for a road trip, and it was an excellent decision. The car was spacious, comfortable, and had all the necessary amenities for a long journey. Booking and pickup were seamless, and customer support was helpful when we needed assistance. Definitely using this service again!'
    },
]


const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {

  
        setFeedbacks(feedbackData);
    



    },[])
    return (
        
        <div className="my-[100px] lg:w-[90%] mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">Feedback</h1>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          virtual
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="flex flex-col items-center justify-evenly w-full h-[350px] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white">
                <img
                  src={feedback.feedbackUserPhoto}
                  alt={`${feedback.name}'s photo`}
                  className="w-[80px] h-[80px] rounded-full shadow-md"
                />
                <h2 className="text-xl font-semibold text-gray-700 text-center">{feedback.name}</h2>
                <p className="text-sm text-blue-600 italic text-center">{feedback.lifeStyle}</p>
                <p className="text-gray-600 text-center">{feedback.feedBack}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      
      
    );
};

export default Feedback;