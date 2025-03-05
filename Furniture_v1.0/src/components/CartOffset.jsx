import React, { useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';

const CartOffset = () => {
    const [open,setOpen] = useState(false);
    const cartItems  = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const handleRemoveItem = (id) =>{
        dispatch(removeFromCart(id));
    }
    
    return (
        <div>
            <button onClick={()=>{setOpen(true)}} className='bg-lime-100 relative cursor-pointer h-10 w-10 flex justify-center items-center rounded-full hover:bg-lime-300 transition-all duration-300 ease-linear'>
                <span className='bg-red-500 text-white text-xs absolute top-0 -right-2 h-4 w-4 flex justify-center items-center rounded-full'>
                    {cartItems.length}
                </span>
                <RiShoppingCartLine />
            </button>
            <div className={`w-full fixed top-0 right-0 h-screen ${open? 'block':'hidden'} max-h-screen z-50`}>

                <div className={`bg-white z-[100] ${open ? 'translate-x-0' :'translate-x-full'} w-full max-w-sm h-full ml-auto relative`}>
                    <div className="w-full flex justify-center border-b items-center px-3 py-2">
                        <div className='w-11/12'>
                            <h1 className='font-bold'>My Cart</h1>
                        </div>
                        <div className='w-1/12'>
                            <button onClick={()=>{setOpen(false)}} className='p-3'>
                        <IoCloseSharp />
                        </button>
                        </div>
                    </div>
                    <div className="w-full p-3">
                    <ul>
                       
                            {cartItems.length > 0 ? cartItems.map(item=>(
                                <li key={item.id} className='flex group my-3 bg-gray-50 cursor-pointer px-2 py-3 justify-center gap-4 items-center'>
                                    <div className='w-24 h-24 overflow-hidden'>
                                        <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-lg'>{item.name}</h1>
                                        <h4 className='text-lime-400 text-sm py-2'>$ {item.price}</h4>
                                    </div>
                                    <div>
                                        <button onClick={()=>handleRemoveItem(item.id)} className='text-red-500 opacity-0 group-hover:opacity-100'>
                                        <FaRegTrashCan />
                                        </button>
                                    </div>
                                </li>
                            )): (
                                <h1 className='text-center py-3 px-2 font-semibold'>
                                    Your Cart is Empty!
                                </h1>
                            )} 
                      
                    </ul>
                    </div>
                </div>
                <div onClick={()=>{setOpen(false)}} className={`h-full w-full z-[60] fixed top-0 ${open ? 'translate-x-0' :'translate-x-full'} bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20`}>

                </div>
            </div>
        </div>
    )
}

export default CartOffset