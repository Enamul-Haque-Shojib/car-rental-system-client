import CarCard from '@/page/AllCars/CarCard';
import { useGetAllRelatedQueryCarsMutation } from '@/redux/features/car/carApi';
import React from 'react';
import { useEffect, useState } from 'react';


import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


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
            <SwiperSlide key={car._id}>
              <CarCard car={car}></CarCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      
      
    );
};

export default RelatedCar;