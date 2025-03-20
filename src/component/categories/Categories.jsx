import React, { useEffect, useState } from 'react';
import Category from './Category';
import { Link } from 'react-router';

const categoryData = [
    {
        id:'1',
        image:'https://www.goodwood.com/globalassets/.road--racing/road/news/2020/6-june/list-dan-trent-luxury-cars-2020/bmw-i7-2600.jpg?rxy=0.5,0.5',
        title: ' Luxury Cars ',
        
    },
    {
        id:'1',
        image:'https://d2kde5ohu8qb21.cloudfront.net/files/663eb473e3a23a00087b8980/bg-hyundai-elantra-thumbnail.jpg?w=838&width=838&format=webp',
        title: 'Sedans',
        
    },
    {
        id:'2',
        image:'https://media.drive.com.au/obj/tx_q:70,rs:auto:448:252:1/caradvice/private/82b78bbbab7e7f067d4c449e34f3a7b4',
        title: 'Compact Cars',
        
    },
    {
        id:'3',
        image:'https://www.usnews.com/object/image/00000191-ebcb-dc00-a7ff-ffdb1d470001/01-usnpx-2025hyundaivenue-angularfront-jms.jpg?update-time=1726237842515&size=responsive640',
        title: 'Brand Car',
        
    },
    {
        id:'4',
        image:'https://upload.wikimedia.org/wikipedia/commons/f/f0/2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg',
        title: 'Pickup Trucks',
        
    },
  
   
]



const Categories = () => {
    const [categories, setCategories] = useState([]);

    
        useEffect(() => {
    
        
            setCategories(categoryData);
        
    
        },[])

        const handleHomeCategories=(category)=>{
            console.log(category);
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
            onClick={() => handleHomeCategories(category.title)}
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