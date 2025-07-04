import React from 'react'
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
const Checkout = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const { setShowCheckout } = useAppContext();

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center text-sm text-gray-600 bg-black/50'>
            <form className="relative flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
                <button 
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 hover:cursor-pointer text-xl font-bold"
                    aria-label="Close"
                >
                    <img className='w-full h-8' src={assets.remove_icon} alt="" />
                </button>

                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">Checkout</span>
                </p>

                <div className="w-full">
                    <p>Name</p>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="name"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        type="text"
                        required
                    />
                </div>

                <div className="w-full">
                    <p>Email</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="email"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        type="email"
                        required
                    />
                </div>

                <div className="w-full">
                    <p>Address</p>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        placeholder="address"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        type="text"
                        required
                    />
                </div>

                <button onClick={() => setShowCheckout(false)} className="bg-green-600 hover:bg-green-700 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                    Checkout
                </button>
            </form>
        </div>
    );
};

export default Checkout;
