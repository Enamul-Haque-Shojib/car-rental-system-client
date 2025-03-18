import CarCard from "./CarCard"

const AllCars = () => {

    const carsData = [
        {
          "id": 1,
          "name": "Toyota Corolla",
          "type": "Sedan",
          "seats": 5,
          "transmission": "Automatic",
          "air_conditioning": true,
          "doors": 4,
          
          "bags_capacity": 2,
          "price_per_day": 50,
          "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278914/toyota-corolla_qsndyq.jpg"
        },
        {
          "id": 2,
          "name": "Honda Civic",
          "type": "Sedan",
          "seats": 5,
          "transmission": "Manual",
          "air_conditioning": true,
          "doors": 4,
          
          "bags_capacity": 3,
          "price_per_day": 55,
          "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278781/car2_aqc5sk.webp"
        },
        {
          "id": 3,
          "name": "Ford Mustang",
          "type": "Sports",
          "seats": 4,
          "transmission": "Automatic",
          "air_conditioning": true,
          "doors": 2,
          
          "bags_capacity": 1,
          "price_per_day": 120,
          "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278806/car4_f1slhy.png"
        },
        {
          "id": 4,
          "name": "Tesla Model 3",
          "type": "Electric",
          "seats": 5,
          "transmission": "Automatic",
          "air_conditioning": true,
          "doors": 4,
          
          "bags_capacity": 3,
          "price_per_day": 90,
          "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278829/Tesla-Model-3_hb1c14.jpg"
        },
        {
          "id": 5,
          "name": "Jeep Wrangler",
          "type": "SUV",
          "seats": 5,
          "transmission": "Manual",
          "air_conditioning": true,
          "doors": 4,
          
          "bags_capacity": 4,
          "price_per_day": 80,
          "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278820/JeepWrangler_etntwb.jpg"
        },
        {
          "id": 6,
          "name": "Mercedes-Benz S-Class",
          "type": "Luxury",
          "seats": 5,
          "transmission": "Automatic",
          "air_conditioning": true,
          "doors": 4,
        
          "bags_capacity": 3,
          "price_per_day": 150,
          "image_url": "https://res.cloudinary.com/do8woqwpf/image/upload/v1742278871/Mercedes-Benz_hjzvbs.jpg"
        }
      ]
      
    return (
        <div className="my-6 md:my-10 text-center">

            <h2 className="font-bold text-2xl font-charm text-[#009900]">Find Your Perfect Ride </h2>
            <p className="px-8 mt-1 max-w-md mx-auto">Compare, explore, and discover the best cars to match your lifestyle and needs.</p>

            {/* cars container */}

            <div className="mt-5 md:mt-10 space-y-3 md:space-y-9">

                {
                    carsData.map(car => <CarCard key={car.id} car={car} />)
                }
            </div>


        </div>
    )
}

export default AllCars
