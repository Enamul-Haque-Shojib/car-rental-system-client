// import React from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { BrandsFilter, CategoriesFilter } from '@/constant';
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
// import { useGetAllQueryCarsMutation } from '@/redux/features/car/carApi';
// const AllCategories = ({ handleCategories }) => {
//     const [filters, setFilters] = React.useState({
//         brand: '',
//         carModel: '',
//         year: '',
//         slugType: '',
//         pricePerDay: '',
//         page: 1,
//       });

//       const updateFilter = (key, value) => {
//         setFilters(prev => ({ ...prev, [key]: value }));
//       };

//       const [triggerQuery, { data, isLoading }] = useGetAllQueryCarsMutation();

//       const handleSearch = async() => {
//         const queryParams = new URLSearchParams();
      
//         Object.entries(filters).forEach(([key, value]) => {
//           if (value) queryParams.append(key, value);
//         });

//         console.log('---filter--->>',queryParams)
      
//         const res = await triggerQuery(queryParams.toString()).unwrap();
//         console.log(res)
//       };
      
      
//     return (
        
//         <Card className='bg-gray-100 dark:bg-gray-800 p-5 rounded-lg w-full lg:w-[20%] lg:sticky static top-49 shadow-md'>
//             {/* <h2 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>Categories</h2> */}
//             <div className='flex flex-col gap-3'>
//                 <Button 
//                     variant='outline' 
//                     className='w-full text-left' 
//                     onClick={() => handleCategories('all')}
//                 >
//                     All
//                 </Button>
//                 {CategoriesFilter.map((category, index) => (
//                     <Button 
//                         variant='outline' 
//                         className='w-full text-left' 
//                         key={index} 
//                         onClick={() => handleCategories(category.slug)}
//                     >
//                         {category.title}
//                     </Button>
//                 ))}
//             </div>
//             <Select onValueChange={(value) => updateFilter('slugType', value)}>
//             <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select a category" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectGroup>
//                 <SelectLabel>Categories</SelectLabel>
//                 <SelectItem 
//                     value="all"
//                     variant='outline' 
//                     className='w-full text-left' 
//                     onClick={() => handleCategories('all')}
//                 >All</SelectItem>
//                 {
//                     CategoriesFilter.map((category, index) => (
//                         <SelectItem value={category.slug}
//                             variant='outline' 
//                             className='w-full text-left' 
//                             key={index} 
                          
//                         >
//                             {category.title}
//                         </SelectItem>
//                     ))
//                 }
//                 </SelectGroup>
//             </SelectContent>
//             </Select>
//             <Select onValueChange={(value) => updateFilter('brand', value)}>
//             <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select a Brand" />
//             </SelectTrigger>
//             <SelectContent>
//                 <SelectGroup>
//                 <SelectLabel>Brands</SelectLabel>
//                 <SelectItem 
//                     value="all"
//                     variant='outline' 
//                     className='w-full text-left' 
//                     onClick={() => handleCategories('all')}
//                 >All</SelectItem>
//                 {
//                     BrandsFilter.map((brand, index) => (
//                         <SelectItem value={brand.title}
//                             variant='outline' 
//                             className='w-full text-left' 
//                             key={index} 
                         
//                         >
//                             {brand.title}
//                         </SelectItem>
//                     ))
//                 }
//                 </SelectGroup>
//             </SelectContent>
//             </Select>
//             <Button onClick={handleSearch}>Apply Filters</Button>

//         </Card>
//     );
// };

// export default AllCategories;





import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrandsFilter, CategoriesFilter } from '@/constant';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const AllCategories = ({updateFilter, filters, setFilters}) => {
    const [price, setPrice] = useState([0]);

      
      
    return (
        
        <Card className='bg-gray-100 dark:bg-gray-800 p-5 rounded-lg w-full lg:w-[20%] lg:sticky static top-49 shadow-md'>
           <div>
      <div className="flex items-center space-x-2">
      <Checkbox id="terms" 
      checked={filters.status}
      onCheckedChange = {(checked) => {checked ? (updateFilter('status', 'not_rent'), updateFilter('page', 1)) : ((updateFilter('status', '')), updateFilter('page', 1)) }} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Available
      </label>
    </div>
      </div>
            <Select  value={filters.slugType} onValueChange={(value) =>{ value === 'none' ? (updateFilter('slugType', ''), updateFilter('page', 1)) :  (updateFilter('slugType', value), updateFilter('page', 1))}}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem 
                    value="none"
                    variant='outline' 
                    className='w-full text-left' 
                    // onClick={() => handleCategories('all')}
                >All</SelectItem>
                {
                    CategoriesFilter.map((category, index) => (
                        <SelectItem value={category.slug}
                            variant='outline' 
                            className='w-full text-left' 
                            key={index} 
                          
                        >
                            {category.title}
                        </SelectItem>
                    ))
                }
                </SelectGroup>
            </SelectContent>
            </Select>
            <Select  
            value={filters.brand} onValueChange={(value) =>{ value === 'none' ? (updateFilter('brand', ''), updateFilter('page', 1)) :  (updateFilter('brand', value),updateFilter('page', 1))}}
            >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Brand" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Brands</SelectLabel>
                <SelectItem 
                    value='none'
                    variant='outline' 
                    className='w-full text-left' 
                    // onClick={() => handleCategories('all')}
                >All</SelectItem>
                {
                    BrandsFilter.map((brand, index) => (
                        <SelectItem value={brand.title}
                            variant='outline' 
                            className='w-full text-left' 
                            key={index} 
                         
                        >
                            {brand.title}
                        </SelectItem>
                    ))
                }
                </SelectGroup>
            </SelectContent>
            </Select>
          
            <div className="mb-1">
            <p className="text-sm mt-1">Selected Price: ${filters.pricePerDay}</p>
        <div className="flex items-center justify-between text-sm mb-1">
          <span>$0</span>
          <span>$500</span>
        </div>
        <Slider
          max={500}
          step={50}
          defaultValue={[filters.pricePerDay==='' ? '0' : filters.pricePerDay]}
          onValueChange={(value) => {
            setPrice(value);
            (updateFilter("pricePerDay", value[0]),updateFilter('page', 1));
          }}
          className="w-full"
        />
        {/* <p className="text-sm mt-2">Selected Price: ${price[0]}</p> */}
        
      </div>
            <div className="mb-1">
            <p className="text-sm mt-1">Selected Mile Age: {filters.mileAge}</p>
        <div className="flex items-center justify-between text-sm mb-1">
          <span>$0</span>
          <span>$500</span>
        </div>
        <Slider
          max={500}
          step={50}
          defaultValue={[filters.mileAge===''? '0' : filters.mileAge]}
          onValueChange={(value) => {
            setPrice(value);
            (updateFilter("mileAge", value[0]),updateFilter('page', 1));
          }}
          className="w-full"
        />
        
      </div>
            <div className="mb-1">
            <p className="text-sm mt-1">Selected Seats: {filters.seats}</p>
        <RadioGroup className='grid grid-cols-4 space-x-0'
         defaultValue={filters.seats==='' ? '0' : filters.seats }
         onValueChange={(value) =>{ value === '0' ? (updateFilter('seats', ''), updateFilter('page', 1)) :  (updateFilter('seats', value),updateFilter('page', 1))}} 
         >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="0" id="r1" />
        <Label htmlFor="r1">0</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="2" id="r2" />
        <Label htmlFor="r2">2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="4" id="r3" />
        <Label htmlFor="r3">4</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="5" id="r4" />
        <Label htmlFor="r4">5</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="6" id="r5" />
        <Label htmlFor="r5">6</Label>
      </div>
    </RadioGroup>
        
      </div>
     

      
        </Card>
    );
};

export default AllCategories;
