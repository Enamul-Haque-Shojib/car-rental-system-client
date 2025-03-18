import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import uploadImage from "@/hooks/uploadImage";

const carSchema = z.object({
  brand: z.string().min(2, "Brand is required"),
  model: z.string().min(2, "Model is required"),
  year: z.number().min(2000, "Year must be 2000 or later"),
  type: z.string(),
  fuelType: z.string(),
  seats: z.number().min(2).max(8, "Seats must be between 2 and 8"),
  transmission: z.string(),
  mileage: z.string().min(2, "Mileage is required"),
  pricePerDay: z.number().min(10, "Price must be at least $10"),
  location: z.string().min(2, "Location is required"),
  availability: z.boolean(),
  features: z.object({
    airConditioner: z.boolean(),
    gps: z.boolean(),
    bluetooth: z.boolean(),
    rearCamera: z.boolean(),
    sunroof: z.boolean().optional(),
    fourWheelDrive: z.boolean().optional(),
  }),
  images: z.array(z.string().url("Invalid URL")).min(1, "At least one image URL is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

const AddCar = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(carSchema),
    defaultValues: {
      brand: "",
      model: "",
      year: 2022,
      type: "Sedan",
      fuelType: "Petrol",
      seats: 5,
      transmission: "Automatic",
      mileage: "",
      pricePerDay: 50,
      location: "",
      availability: true,
      features: {
        airConditioner: false,
        gps: false,
        bluetooth: false,
        rearCamera: false,
      },
      images: [],
      description: "",
    },
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        setValue("images", [imageUrl]);
        setPreviewUrl(imageUrl);
      }
    }
  };

  return (<div>
    <h2 className="text-xl font-bold">Add a New Car</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto grid md:grid-cols-2 gap-2 bg-base-200 border border-base-300  p-6 shadow-lg rounded-lg space-y-4">


   
      
      <label className="floating-label">
        <span>Brand</span>
        <input {...register("brand")} placeholder="Brand" className="input input-md" />
        {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
      </label>
      <label className="floating-label">
    <span>Model</span>
    
      <input {...register("model")} placeholder="Model" className="input input-md" />
      {errors.model && <p className="text-red-500">{errors.model.message}</p>}
    </label>
    <label className="floating-label">
    <span>Moder Year</span>
    
      <input type="number" {...register("year", { valueAsNumber: true })} placeholder="Year" className="input input-md" />
      {errors.year && <p className="text-red-500">{errors.year.message}</p>}
    </label>
    <label className="floating-label">
  <span className=" ">Car Type</span>
  <select {...register("type")} className="input input-md w-full mt-1">
    <option value="Sedan">Sedan</option>
    <option value="SUV">SUV</option>
    <option value="Hatchback">Hatchback</option>
    <option value="Convertible">Convertible</option>
    <option value="Coupe">Coupe</option>
    <option value="Truck">Truck</option>
    <option value="Van">Van</option>
  </select>
</label>

<label className="floating-label">
  <span className="">Fuel Type</span>
  <select {...register("fuelType")} className="input input-md w-full mt-1">
    <option value="Petrol">Petrol</option>
    <option value="Diesel">Diesel</option>
    <option value="Electric">Electric</option>
    <option value="Hybrid">Hybrid</option>
    <option value="CNG">CNG</option>
  </select>
</label>

<label className="floating-label">
  <span className="">Transmission</span>
  <select {...register("transmission")} className="input input-md w-full mt-1">
    <option value="Automatic">Automatic</option>
    <option value="Manual">Manual</option>
  </select>
</label>
<label className="floating-label">
<span>Seats</span>
      <input type="number" {...register("seats", { valueAsNumber: true })} placeholder="Seats" className="input input-md" />
      {errors.seats && <p className="text-red-500">{errors.seats.message}</p>}
      </label>
      <label className="floating-label">
      <span>Mileage</span>
      <input {...register("mileage")} placeholder="Mileage (e.g., 12 km/l)" className="input input-md" />
      </label>
      <label className="floating-label">
      <span>Price Per Day</span>
        
      <input type="number" {...register("pricePerDay", { valueAsNumber: true })} placeholder="Price Per Day ($)" className="input" />
      {errors.pricePerDay && <p className="text-red-500">{errors.pricePerDay.message}</p>}
      </label>
      <label className="floating-label">
      <span>Location (City, Country)</span>
      <input {...register("location")} placeholder="Location (City, Country)" className="input input-md" />
      {errors.location && <p className="text-red-500">{errors.location.message}</p>}
      </label>
      <label className="flex items-center">
        <input type="checkbox" {...register("availability")} className="mr-2" />
        Available for Rent
      </label>

      <div>
        <h3 className="font-semibold">Features:</h3>
        <label className="flex items-center">
          <input type="checkbox" {...register("features.airConditioner")} className="mr-2" />
          Air Conditioner
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("features.gps")} className="mr-2" />
          GPS
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("features.bluetooth")} className="mr-2" />
          Bluetooth
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("features.rearCamera")} className="mr-2" />
          Rear Camera
        </label>
        <label className="flex items-center">
          <input type="checkbox" {...register("features.sunroof")} className="mr-2" />
          Sunroof
        </label>
      </div>
      <label className="floating-label">
      <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
      {previewUrl && <img src={previewUrl} alt="Preview" className="w-32 h-32 mt-2" />}
      </label>
      <label className="floating-label">

      <textarea {...register("description")} placeholder="Car Description" className="input input-md h-24"></textarea>
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </label>
      <button type="submit" className="bg-blue-500 col-end-2 text-white px-4 py-2 rounded">Add Car</button>
    </form>
  </div>
  );
};

export default AddCar;
