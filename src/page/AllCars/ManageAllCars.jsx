


import useAuth from '@/hooks/useAuth';

import React, { useEffect } from 'react';
import AllCars from './AllCars';
import { Loader } from 'lucide-react';
import AllCategories from './AllCategories';

import AllCarsPagination from '@/component/pagination/AllCarsPagination';

import { debounce } from "lodash";
import { useGetAllQueryCarsMutation } from '@/redux/features/car/carApi';


const ManageAllCars = () => {

    const {cars, setCars, updateFilter, filters, setFilters} = useAuth();
   
    // const [filters, setFilters] = React.useState({
    //   status: '',
    //   mileAge: '',
    //   seats: '',
    //   brand: '',
    //   carModel: '',
    //   year: '',
    //   slugType: '',
    //   pricePerDay: '',
    //   page: 1,
    // });


    // const updateFilter = (key, value) => {
    //   setFilters(prev => ({ ...prev, [key]: value }));
    // };

    const [triggerQuery, { data, isLoading }] = useGetAllQueryCarsMutation();

    const debouncedTrigger = React.useMemo(() => debounce(async(query) => {

      const res = await triggerQuery(query);
      console.log(res?.data)
      setCars(res?.data?.data)

    }, 300), [triggerQuery, setCars]);

    useEffect(() => {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
    
      debouncedTrigger(queryParams.toString());

    }, [filters,  debouncedTrigger]);

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
        <AllCategories updateFilter={updateFilter} filters={filters}></AllCategories>
        <AllCars></AllCars>
        
    </div>
    <AllCarsPagination updateFilter={updateFilter} filters={filters} setFilters={setFilters}></AllCarsPagination>
        </div>
       
    );
};

export default ManageAllCars;