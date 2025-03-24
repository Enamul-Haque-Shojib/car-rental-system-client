import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
     const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
const {user,logout}=useAuth()
console.log(user)
  const handleNavField = () => setOpen(!open);

 
const handlelogout=()=>{
  try {
    logout()
    toast.success('Logout')
  } catch (error) {
    console.log(error)
  }
}
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
    return (
        <div className="bg-white shadow-md sticky top-0 z-50 text-black">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-extrabold tracking-wider">
              SmartCar Rentals
            </Link>
    
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <NavLink
                to="/"
                className="transition duration-300 hover:text-yellow-300"
                activeclassName="text-yellow-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="transition duration-300 hover:text-yellow-300"
                activeclassName="text-yellow-300"
              >
                About
              </NavLink>
              <NavLink
                to="/addCar"
                className="transition duration-300 hover:text-yellow-300"
                activeclassName="text-yellow-300"
              >
                Add Car
              </NavLink>
              <NavLink
                to="/dashboard"
                className="transition duration-300 hover:text-yellow-300"
                activeclassName="text-yellow-300"
              >
                Dashboard
              </NavLink>
        
                
          {user? <>
                 
                 <div className="relative">
                   <img
                     src={user?.photoURL||"https://via.placeholder.com/40"}
                     alt="User"
                     onClick={toggleDropdown}
                     className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                   />
                
                   {dropdownOpen && (
                     <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48">
                       <div className="px-4 py-2">
                         
                         <p className="text-sm text-gray-500">{user?.displayName}</p>
                       </div>
                       <hr />
                     
                       <hr />
                       <button
                       onClick={handlelogout}
                         className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-red-600"
                       >
                         Logout
                       </button>
                     </div>
                   )}
                 </div>
               </>
           :<>
                  
                  <NavLink
                    to="/login"
                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition duration-300"
                  >
                    Login
                  </NavLink>
                </>}
                
        
            </div>
    
            {/* Mobile Navigation Button */}
            <button
              className="lg:hidden text-2xl focus:outline-none"
              onClick={handleNavField}
            >
              {open ? <X></X> : <Menu></Menu>}
            </button>
          </div>
    
          {/* Mobile Navigation */}
          <div
            className={`lg:hidden bg-white text-black fixed inset-0 transition-transform duration-300 z-40 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6">
              <button className="text-2xl mb-4 focus:outline-none" onClick={handleNavField}>
                <p>X</p>
              </button>
              <div className="space-y-4">
                <NavLink
                  to="/"
                  className="block text-lg hover:text-indigo-500"
                  activeclassName="text-indigo-500"
                  onClick={handleNavField}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="block text-lg hover:text-indigo-500"
                  activeclassName="text-indigo-500"
                  onClick={handleNavField}
                >
                  About
                </NavLink>
            {
              user &&  <>
                    
              <button
            onClick={handlelogout}
                className="block w-full text-lg px-4 py-2 text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            </>
            }
                  
            {
              user ? <></> : 
              <>
              <NavLink
                to="/login"
                className="block text-lg hover:text-indigo-500"
                activeclassName="text-indigo-500"
                onClick={handleNavField}
              >
                Login
              </NavLink>
            </>
            }
                  
         
              </div>
            </div>
          </div>
        </div>
      );
};

export default Navbar;