"use client";
import { useState } from "react"
import ProductByCat from "./component/ProductByCat"
import { categoryData } from "./Data"
import Link from "next/link"
function Home(){
  let [color,setColor]=useState('red')
  let [show,setShow]=useState(true)
  return(
    <>
    <section>
      <h1>{color}</h1>
      <button onClick={()=>setColor('blue')}>Chnage Color</button>
      <h1 className={show? "": "hidden"}>Hello</h1>
      <button onClick={()=>setShow(!show)}>Toggle</button>
    </section>





    <section>
      <div className="container flex justify-between gap-1">
        <div className="w-[28%]">
          <div className="shadow">
            <ul>
              {categoryData.slice(0,10).map((item)=>(
                <li className="py-2 ps-2 border">
                  <Link href={`/category/${item.slug}`}> {item.name} </Link>
                  </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="72% shadow">
          <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73c455d3ae.png" alt="" />
        </div>
      </div>
    </section>

   <ProductByCat title="beauty"/>
   <ProductByCat title="furniture"/>
   <ProductByCat title="groceries"/>
   

    </>
  )
}
export default Home