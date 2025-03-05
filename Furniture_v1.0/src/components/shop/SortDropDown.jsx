import React, { useState } from 'react'

const SortDropDown = ({products,SortedData}) => {
    const [sortDropdown,setDropDown] = useState('');
    const handleSortChange = (e)=>{
        const value = e.target.value;
        setDropDown(value);

        let sortedProducts = [...products];
        switch (value){
            case 'price-asc':sortedProducts.sort((a,b)=> a.price - b.price);
            break;
            case 'price-desc':sortedProducts.sort((a,b)=>  b.price - a.price);
            break;
            case 'name-asc':sortedProducts.sort((a,b)=>  a.name.localeCompare(b.name));
            break;
            case 'name-desc':sortedProducts.sort((a,b)=>  b.name.localeCompare(a.name));
            break;
            default:break;

        }
        SortedData(sortedProducts);

    }
  return (
    <div>
        <select  id="sortDropDown" className='focus:outline-none border border-gray-200 py-2 px-3 rounded-md bg-white' value={sortDropdown} onChange={handleSortChange}>
            <option value="">Select...</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="price-desc">Name: Z to A</option>
        </select>
    </div>
  )
}

export default SortDropDown