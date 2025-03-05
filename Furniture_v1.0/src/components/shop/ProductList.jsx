import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import SortDropDown from './SortDropDown';

const ProductList = () => {
    const [initialProducts,setInitialProducts] = useState([]);
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('./img/Products/products.json')
        .then(res=>res.json())
        .then(data=>{setData(data.products); setInitialProducts(data.products)})
        .catch(error=>console.log(error));
    },[]);

  return (
    <>
    <div className="flex justify-end items-center w-full">
    <SortDropDown products={initialProducts} SortedData={setData}/>
    </div>
    <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  py-3 gap-3'>
    {data.length > 0 && data.map((product)=>(
        <div key={product.id}>
        <ProductCard product={product}/>
        </div>
    ))}
</div>
</>
  )
}

export default ProductList