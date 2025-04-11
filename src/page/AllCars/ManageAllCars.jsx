
import useAuth from '@/hooks/useAuth';
import { useGetAllCarsQuery, useGetAllFilterQueryCarsMutation } from '@/redux/features/car/carApi';
import React, { useEffect } from 'react';
import AllCars from './AllCars';
import { Loader } from 'lucide-react';
import AllCategories from './AllCategories';
import { useParams } from 'react-router';
import AllCarsPagination from '@/component/pagination/AllCarsPagination';

const ManageAllCars = () => {

    const {setCars} = useAuth();
    const {slug} = useParams();


    // const { data: carsData, isLoading } = useGetAllCarsQuery();
    const [getAllFilterQueryCars, {isLoading}] = useGetAllFilterQueryCarsMutation(undefined)

    
    useEffect(() => {
      const getData = async()=>{
        const res = await getAllFilterQueryCars(slug).unwrap();
        setCars(res?.data)
      }
       
        getData();
    },[getAllFilterQueryCars,setCars, slug]);

    const handleCategories = async(slug)=>{
      const res = await getAllFilterQueryCars(slug).unwrap();
      setCars(res?.data)
    
    }

    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-96">
            <Loader className="animate-spin text-gray-400 w-10 h-10" />
          </div>
        );
      }
    
    return (
        <div className='container mx-auto px-4 my-12'>
             <div className='flex lg:flex-row flex-col lg:justify-center lg:items-start gap-x-5'>
        <AllCategories handleCategories={handleCategories}></AllCategories>
        <AllCars></AllCars>
        
    </div>
    <AllCarsPagination></AllCarsPagination>
        </div>
       
    );
};

export default ManageAllCars;