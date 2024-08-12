import React from 'react'
import { productData } from '../Data'
import Link from 'next/link'

function ProductByCat(props) {
    let cat= productData.filter((item)=>item.category==props.title)
  return (
    <>
       <section className="py-5">
      <div className="container">
        <h3 className="font-bold text-2xl uppercase">{props.title}</h3>
        <div className="flex gap-3 flex-wrap">
      {cat.map((item)=>(
        <div className='w-[23%]'>
            <img className='w-full shadow' src={item.images} alt="" />
             <Link href={`/Details/${item.id}`}> {item.title} </Link> </div>
    )
    )}
    </div>
      </div>
    </section>
    </>
  )
}

export default ProductByCat
