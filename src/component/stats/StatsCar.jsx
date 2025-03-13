import React from 'react';

const StatsCar = () => {
    return (
        
        <div className="lg:w-[90%] w-[95%] mx-auto my-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-xl bg-white">
    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">Cars</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">200+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">Experienced tutors</div>
    </div>

    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">Reviews</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">500+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">5-star tutor reviews</div>
    </div>

    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">Owners</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">30+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">Tutor nationalities</div>
    </div>

    <div className="stat flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="stat-title text-lg font-semibold text-gray-600 text-center">App User</div>
      <div className="stat-value text-4xl font-bold text-blue-600 text-center">300+</div>
      <div className="stat-desc text-sm text-gray-500 text-center">Students joined</div>
    </div>
  </div>
</div>

        
    );
};

export default StatsCar;