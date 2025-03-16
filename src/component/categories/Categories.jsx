import React, { useEffect, useState } from 'react';
import Category from './Category';

const categoryData = [
    {
        id:'1',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9SfMwsbkF2fENJaIXIvn3R2zABzrNmtMnQ&s',
        title: 'Brand Car',
        
    },
    {
        id:'1',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9SfMwsbkF2fENJaIXIvn3R2zABzrNmtMnQ&s',
        title: 'Brand Car',
        
    },
    {
        id:'2',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9SfMwsbkF2fENJaIXIvn3R2zABzrNmtMnQ&s',
        title: 'Brand Car',
        
    },
    {
        id:'3',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9SfMwsbkF2fENJaIXIvn3R2zABzrNmtMnQ&s',
        title: 'Brand Car',
        
    },
    {
        id:'4',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9SfMwsbkF2fENJaIXIvn3R2zABzrNmtMnQ&s',
        title: 'Brand Car',
        
    },
    {
        id:'5',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9SfMwsbkF2fENJaIXIvn3R2zABzrNmtMnQ&s',
        title: 'Brand Car',
        
    },
    {
        id:'6',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9SfMwsbkF2fENJaIXIvn3R2zABzrNmtMnQ&s',
        title: 'Brand Car',
        
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
        <button className='btn border p-3 rounded-lg'>
          View All
        </button>
      </div>
           </div>
        </div>
    );
};

export default Categories;