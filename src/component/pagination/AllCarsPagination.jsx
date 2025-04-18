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

const AllCarsPagination = ({updateFilter, filters}) => {
    const {cars, setCars} = useAuth();

    const [currentPage, setCurrentPage] = useState(filters.page);



    const pages = [...Array(cars?.meta?.totalPage).keys()];
   

  

    return (
        <div>
             <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem >
            <button 
            disabled={currentPage===1}>
              <PaginationPrevious 
              onClick={() => {updateFilter('page',currentPage-1); setCurrentPage(currentPage-1)}}  
              className={`${currentPage === 1 ? "text-gray-500 hover:text-gray-500" : "cursor-pointer"}  `}/>
              </button>
          </PaginationItem>


          {
            pages.map((page,index) => (
              <PaginationItem key={index} onClick={() => {updateFilter('page',page + 1); setCurrentPage(page + 1)}} className={`cursor-pointer ${currentPage === page+1 && "bg-gray-300" }`}>
                <PaginationLink >{page + 1}</PaginationLink>
              </PaginationItem>

            ))
          }
          <PaginationItem>
          <button disabled={currentPage === pages.length} ><PaginationNext onClick={() =>{updateFilter('page',currentPage+1); setCurrentPage(currentPage+1)}} className={` ${currentPage === pages.length ? "text-gray-500 hover:text-gray-500 " : "cursor-pointer"} `} /></button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
        </div>
    );
};

export default AllCarsPagination;