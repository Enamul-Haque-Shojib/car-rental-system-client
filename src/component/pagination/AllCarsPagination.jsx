import React, { useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import useAuth from '@/hooks/useAuth';
import { useGetAllPageQueryCarsMutation } from '@/redux/features/car/carApi';
const AllCarsPagination = () => {
    const {cars, setCars} = useAuth();

    const [currentPage, setCurrentPage] = useState(1);
    console.log('--->>>>>>>>>>',currentPage)
    const [getAllPageQueryCars] = useGetAllPageQueryCarsMutation(undefined)

    const pages = [...Array(cars?.meta?.totalPage).keys()];
   

    const handlePageQuery = async (page) => {
       
        try {
          const res = await getAllPageQueryCars(page).unwrap();
          setCars(res?.data)
          setCurrentPage(page)
    
        } catch (error) {
          console.log(error);
        }
    
      }

    return (
        <div>
             <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem >
            <button disabled={currentPage===1}><PaginationPrevious onClick={() => handlePageQuery(currentPage-1)}  className={`${currentPage === 1 ? "text-gray-500 hover:text-gray-500" : "cursor-pointer"}  `}/></button>
          </PaginationItem>


          {
            pages.map((page,index) => (
              <PaginationItem key={index} onClick={() => handlePageQuery(page + 1)} className={`cursor-pointer ${currentPage === page+1 && "bg-gray-300" }`}>
                <PaginationLink >{page + 1}</PaginationLink>
              </PaginationItem>

            ))
          }
          <PaginationItem>
          <button disabled={currentPage === pages.length} ><PaginationNext onClick={() => handlePageQuery(currentPage+1)} className={` ${currentPage === pages.length ? "text-gray-500 hover:text-gray-500 " : "cursor-pointer"} `} /></button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
        </div>
    );
};

export default AllCarsPagination;