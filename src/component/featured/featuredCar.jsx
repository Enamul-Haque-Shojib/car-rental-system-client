import featuredCar from "../../assets/images/featuredCar1.png"
export const FeaturedCar = () => {
    return (
        <div className="relative dark:bg-[#F7F7F7] container mx-auto h-80 md:h-96 lg:h-[450px] xl:h-[510px] ">
            {/* background image */}
            <img src={featuredCar} alt="image" className="w-full h-full object-contain " />

            {/* bottom-to-top gradient Overlay */}
            <div className="absolute  bottom-0 left-0 h-[200px] w-full  bg-gradient-to-t from-black/70 to-transparent"></div>
            {/* left-to-bottom-right gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>


            {/* content over image  */}
            <div className="absolute  top-6 left-4 md:left-10 md:top-20 flex items-center bg-black/70 justify-center text-white  border-white border-2 w-36 md:w-40 h-24 md:h-28 -rotate-20">

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-center w-16 h-6 rounded-xl bg-white text-black font-bold">
                    UP TO
                </div>
                <h2 className="font-bold text-xl md:text-2xl text-center">
                    15% DISCOUNT
                </h2>

            </div>

            <div className="absolute left-6 bottom-8    rounded-xl bg-transparent text-white font-bold text-start">
                   <h2 className="font-bold text-2xl md:text-3xl">LUXURY AND LOOKS FOR LESS</h2>
                   <p className="font-semibold md:mt-0.5 md:text-lg">Book now and save up to 15% on luxury vehicles</p>
                   <button className="border-2 mt-1.5 md:mt-2.5 px-3 py-1 rounded-full cursor-pointer ">Get offer</button>
                </div>

        </div>
    )
}
