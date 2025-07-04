import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = ({ openCart }) => {
    const [open, setOpen] = React.useState(false)
    const { user, getCartCount } = useAppContext();
    
    return (
        <nav className="bg-red-500 flex flex-wrap items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-primary relative">

            <div className="flex items-center gap-2 sm:gap-4 w-full lg:w-auto flex-1">
                <NavLink to="/" onClick={() => setOpen(false)} className="shrink-0">
                    <img
                        className="h-8 w-auto object-contain"
                        src={assets.logo}
                        alt="Logo"
                    />
                </NavLink>
            </div>

            <div className="lg:flex items-center gap-8 text-white ml-8">
                <div onClick={openCart} className="relative cursor-pointer">
                    <img src={assets.cart_icon} className='w-6 invert brightness-0' />
                    <button className="absolute -top-2 -right-3 text-xs bg-white text-red-500 font-semibold bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
            </div>

           
        </nav>
    )
}

export default Navbar;
