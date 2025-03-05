import React from 'react'
import { FaRegEye, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { addToWishlist } from '../slices/wishlistSlice';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = cartItems.some(item => item.id === product.id);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddtoCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };
  const handleAddtoWishlist = () => {
    if(!isInWishlist){
    dispatch(addToWishlist(product));
  }
  };

  return (
    <div className='w-full group cursor-pointer h-full'>
      <div className='relative  overflow-hidden'>
        <img src={product.images[0]} alt={product.name} />
        <div className="absolute -bottom-20 group-hover:bottom-2 transition-all duration-500 ease-in-out w-full">
          <button onClick={handleAddtoCart} className={`w-11/12 block mx-auto ${isInCart ? 'bg-gray-200 hover:bg-gray-400' : 'bg-lime-200 hover:bg-lime-400'}  transition-all duration-200 ease-linear py-2`}> {isInCart ? 'Item in Cart' : 'Add To Cart'}</button>
        </div>

        <div className='p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3'>
          <button onClick={handleAddtoWishlist} className={` p-3 transition-all duration-200 ease-linear rounded-full ${isInWishlist ? 'bg-red-500 text-white' : 'bg-lime-200 hover:bg-lime-400' }`}>
            <FaRegHeart />
          </button>
          <button className='bg-lime-200 hover:bg-lime-400 p-3 transition-all duration-200 ease-linear rounded-full'>
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className='py-3'>
        <div className="flex justify-between items-center">
          <h1 className='font-bold'>{product.name}</h1>
          <h4 className='font-bold text-lime-500'>$ {product.price}</h4>
        </div>

      </div>
    </div>
  )
}

export default ProductCard