import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.jpg?s=612x612&w=0&k=20&c=w68j0FXPz9PagD7Lab_DWLD8jV8Hoaakw6XxwedBeLY="
                alt="language exchange"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
    
            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Welcome to SmartCar Rentals</h2>
              <p className="text-lg">
              Our platform simplifies car rentals by connecting customers with a wide range of vehicles, ensuring a seamless and hassle-free experience. Whether you need a car for a short trip or a long-term rental, we provide a convenient and reliable solution tailored to your needs.
              </p>
    
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-lg">
              Our mission is to make car rentals effortless and accessible for everyone. By offering a user-friendly platform, a diverse selection of vehicles, and exceptional customer service, we strive to deliver a smooth and enjoyable rental experience.
              </p>
              <blockquote className="text-gray-500 italic">
              "Connecting customers with reliable car rentals for a seamless journey."
              </blockquote>
    
              <div className="divider"></div>
    
              <Link to="">
                <button className="btn btn-primary flex items-center gap-2">
              
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
};

export default About;