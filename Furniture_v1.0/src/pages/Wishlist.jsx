import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../slices/wishlistSlice';
import Newsletter from '../components/Newsletter';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.items);
 
    const dispatch = useDispatch();
    const handleRemoveItem = (id) => {
        dispatch(removeFromWishlist(id));
    }
    return (
        <div className='w-full flex-col h-full flex py-5 justify-center items-center'>
            <h1 className='text-center text-xl font-bold py-3'>My Wishlist</h1>
            <div className="w-11/12 py-3  min-h-[50vh]">
                <table className='w-full h-full md:text-sm text-xs'>
                    <thead className='bg-gray-300'>
                        <tr className='font-bold'>
                            <th className='py-3'>ID</th>
                            <th className='py-3'>Name</th>
                            <th className='py-3'>Price</th>
                            <th className='py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {wishlistItems.length > 0 ? (wishlistItems.map((item) => (
                            <tr key={item.id} className='hover:bg-gray-100 text-center'>
                                <td className='py-3'>{item.id}</td>
                                <td className='py-3'>{item.name}</td>
                                <td className='py-3'>$ {item.price}</td>
                                <td className='py-3'>
                                    <button onClick={() => handleRemoveItem(item.id)} className='text-red-500'>
                                        <FaRegTrashCan />
                                    </button>
                                </td>
                            </tr>
                        ))

                        ) : 
                        
                        (
                            <tr className='hover:bg-gray-100 text-center'>
                                <td colSpan={5} className='py-3'>
                                The Wishlist is Empty
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
            <div className="w-11/12 py-5">
        
        <Newsletter/>
        </div>
        </div>
    )
}

export default Wishlist