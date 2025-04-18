import React, { useEffect, useState } from 'react';
import Category from './Category';
import { Link, useNavigate } from 'react-router';
import { CategoriesFilter } from '@/constant';
import useAuth from '@/hooks/useAuth';




const Categories = () => {
  const {cars, setCars, updateFilter, filters, setFilters} = useAuth();
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
        useEffect(() => {
    
            setCategories(CategoriesFilter);
        
        },[])

        const handleHomeCategories=(slug)=>{
          (updateFilter('slugType', slug), updateFilter('page', 1))
          navigate(`allCars`)
          
            
            
        }
    return (
        <div>
           <div className='container mx-auto my-12 px-4 lg:px-0'>
           <h1 className="text-4xl font-bold text-center mb-10 text-black">
        Categories
      </h1>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleHomeCategories(category.slug)}
          >
            <Category category={category} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="allCars" className='btn border p-3 rounded-lg'>
          View All
        </Link>
      </div>
           </div>
        </div>
    );
};

export default Categories;