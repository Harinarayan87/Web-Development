"use client";
import { productData } from '@/app/Data';
import { useParams } from 'next/navigation'
import React from 'react'


function page() {
    let {slug}=useParams() //stores the last data of slug
    var product = productData.filter((item)=>item.category==slug)
    
  return (
    <div className='container py-2'>
      <h2 className='font-bold uppercase py-2'>Details of {slug}</h2>
      {product=='' ? "No Data": ""}
      <div className="flex gap-3 flex-wrap">
      {product.map((item)=>(
        <div className='w-[23%]'>
            <img className='w-full shadow' src={item.images} alt="" />
              {item.title} </div>
    )
    )}
    </div>
    </div>
  )
}

export default page
