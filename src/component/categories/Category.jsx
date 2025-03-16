import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <div className="rounded-lg overflow-hidden">

        <img
          src={category.image}
          alt={category.title}
          fill
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
   
      <div className="text-center py-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {category.title}
        </h3>
      </div>
    </div>
        </div>
    );
};

export default Category;