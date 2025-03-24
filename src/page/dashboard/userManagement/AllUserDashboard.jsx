import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetAllUsersQuery } from '@/redux/features/user/userApi';
import React from 'react';

const AllUserDashboard = () => {
    const {data: usersData, isLoading} = useGetAllUsersQuery();
    if(isLoading) return <p>Loading...</p>;
    return (
         <div className=''>
                    <h1 className='text-2xl text-center font-bold'>All Users</h1>
                    <Table>
                  <TableCaption>A list of Users.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="">Avatar</TableHead>
                      <TableHead className="">Name</TableHead>
                      <TableHead className="">Email</TableHead>
                      <TableHead>Role</TableHead>
                
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData?.data?.map(({_id, photoURL, name, email, role}) => (
                      <TableRow key={_id}>
                        <TableCell className="">
                        {/* <Avatar>
              <AvatarImage src={image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <img
                src={photoURL}
                alt="Photo by Drew Beamer"
                fill
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
                        </TableCell>
                        <TableCell className="">{name}</TableCell>
                        <TableCell className="">{email}</TableCell>
                        <TableCell>{role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      
                    </TableRow>
                  </TableFooter>
                </Table>
                </div>
    );
};

export default AllUserDashboard;