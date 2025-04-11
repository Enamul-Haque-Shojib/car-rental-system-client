import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

import { useGetAllSearchQueryCarsMutation } from '@/redux/features/car/carApi';
import CarCard from './CarCard';
import { Loader } from 'lucide-react';
import useAuth from '@/hooks/useAuth';


const AllCars = () => {
    const { cars, setCars } = useAuth();


    const [getAllSearchQueryCars, { isLoading }] = useGetAllSearchQueryCarsMutation();

    const form = useForm({
        defaultValues: {
            search: '',
        },
    });

    const onSubmit = async (data) => {
        try {
            const res = await getAllSearchQueryCars(data.search).unwrap();
            setCars(res?.data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-8 mt-5 lg:mt-0">All Cars</h1>
            <div className="bg-white dark:bg-gray-900 rounded-lg">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col sm:flex-row items-center justify-around gap-4 mb-10"
                    >
                        <FormField
                            control={form.control}
                            name="search"
                            render={({ field }) => (
                                <FormItem className="w-full sm:w-auto flex-1">
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Search cars..."
                                            required
                                            {...field}
                                            className="rounded-lg border-gray-300 dark:border-gray-700"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition rounded-lg px-6 py-2 text-white font-semibold"
                        >
                            Search
                        </Button>
                    </form>
                </Form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cars?.result?.length > 0 ? (
                    cars?.result?.map((car) => <CarCard key={car._id} car={car} />)
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">No cars found</p>
                )}
            </div>

        </div>
    );
};

export default AllCars;
