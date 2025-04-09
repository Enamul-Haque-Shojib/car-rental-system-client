
import useAuth from '@/hooks/useAuth';
import { useGetAllCarsQuery, useGetAllFilterQueryCarsMutation } from '@/redux/features/car/carApi';
import React, { useEffect } from 'react';
import AllCars from './AllCars';
import { Loader } from 'lucide-react';
import AllCategories from './AllCategories';
import { useNavigate, useParams } from 'react-router';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from 'react';

const ManageAllCars = () => {

  const { setCars } = useAuth();
  const [paginationData, setPaginationData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const { slug } = useParams()
  const navigate = useNavigate();
  // const { data: carsData, isLoading } = useGetAllCarsQuery();
  const [getAllFilterQueryCars, { isLoading }] = useGetAllFilterQueryCarsMutation(undefined)

  const pages = [...Array(paginationData?.totalPage).keys()];


  useEffect(() => {
    const getData = async () => {
      const res = await getAllFilterQueryCars(slug).unwrap();
      setCars(res?.data?.result)
      setPaginationData(res?.data?.meta)
    }

    getData();
  }, [getAllFilterQueryCars, setCars, slug]);

  const handleCategories = async (slug) => {
    const res = await getAllFilterQueryCars(slug).unwrap();
    setCars(res?.data?.result)

  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader className="animate-spin text-gray-400 w-10 h-10" />
      </div>
    );
  }
  // console.log(currentPage);

  return (
    <div className='container mx-auto px-4 my-12'>
      <div className='flex lg:flex-row flex-col lg:justify-center lg:items-start gap-x-5'>
        <AllCategories handleCategories={handleCategories}></AllCategories>
        <AllCars></AllCars>
      </div>
      {/* paginations */}
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious disabled={currentPage === 1} className={`${currentPage === 1 ? "text-gray-500 hover:text-gray-500" : ""}  `} />
          </PaginationItem>


          {
            pages.map(page => (
              <PaginationItem onClick={() => setCurrentPage(page+1)} className="cursor-pointer">
                <PaginationLink >{page+1}</PaginationLink>
              </PaginationItem>

            ))
          }
          <PaginationItem>
            <PaginationNext disabled={ `${currentPage === pages.length}`} className={`${currentPage === pages.length ? "text-gray-500" : ""} `} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>

  );
};

export default ManageAllCars;