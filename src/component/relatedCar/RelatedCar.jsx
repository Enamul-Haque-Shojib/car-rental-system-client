import CarCard from '@/page/AllCars/CarCard';
import { useGetAllRelatedQueryCarsMutation } from '@/redux/features/car/carApi';
import React from 'react';
import { useEffect, useState } from 'react';


import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const feedbackData = [
    {
        id:'1',
        feedbackUserPhoto:'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        name: 'Jack Robart',
        lifeStyle:'Engineering',
        feedBack:'The car rental system is very efficient and user-friendly. I loved the seamless booking experience'
    },
    {
        id:'2',
        feedbackUserPhoto:'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        name: 'David Smith',
        lifeStyle:'Frequent Traveler',

        feedBack:'I recently used this car rental service for a week-long trip, and I must say it exceeded my expectations. The pricing was reasonable, the vehicle selection was impressive'
    },
    {
        id:'3',
        feedbackUserPhoto:'https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=',

        name: 'Sophia Martinez',
        lifeStyle:'Business Consultant',
        feedBack:'I booked a luxury car for a business meeting, and the experience was phenomenal. The vehicle was clean, well-maintained, and delivered on time.'
    },
    {
        id:'4',

        feedbackUserPhoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s',
        name: 'Robert Williams',
        lifeStyle:'Adventure Enthusiast',
        feedBack:'I rented an SUV for an off-road adventure, and I was truly impressed by the quality of the vehicle. It was in top condition, equipped with all necessary safety features'
    },
    {
        id:'5',
        feedbackUserPhoto:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-olly-774909.jpg&fm=jpg',
        name: 'Emma Johnson',
        lifeStyle:'Family Traveler',
        feedBack:'My family and I rented a minivan for a road trip, and it was an excellent decision. The car was spacious, comfortable, and had all the necessary amenities for a long journey.'

    },
]

const RelatedCar = ({slugType}) => {
    console.log(slugType)
    const [reltdCars, setReltdCars] = useState([]);
    console.log(reltdCars)
    const [getAllRelatedQueryCars, isLoading] = useGetAllRelatedQueryCarsMutation(undefined);

    useEffect(() => {
          const getData = async()=>{
            const res = await getAllRelatedQueryCars(slugType).unwrap();
            console.log(res)
            setReltdCars(res?.data?.result)
          }
           
            getData();
        },[getAllRelatedQueryCars, slugType]);

    
    

    return (
        
        <div className="my-[100px] lg:w-[90%] mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">Related Cars</h1>
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
          {reltdCars.map((car) => (
            <SwiperSlide key={car.id}>
              <CarCard car={car}></CarCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      
      
    );
};

export default RelatedCar;