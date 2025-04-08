import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CategoriesFilter } from '@/constant';
const AllCategories = ({ handleCategories }) => {
    return (
        
        <Card className='bg-gray-100 dark:bg-gray-800 p-5 rounded-lg w-full lg:w-[20%] lg:sticky static top-28 shadow-md'>
            <h2 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>Categories</h2>
            <div className='flex flex-col gap-3'>
                <Button 
                    variant='outline' 
                    className='w-full text-left' 
                    onClick={() => handleCategories('all')}
                >
                    All
                </Button>
                {CategoriesFilter.map((category, index) => (
                    <Button 
                        variant='outline' 
                        className='w-full text-left' 
                        key={index} 
                        onClick={() => handleCategories(category.slug)}
                    >
                        {category.title}
                    </Button>
                ))}
            </div>
        </Card>
    );
};

export default AllCategories;