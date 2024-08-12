"use client";
import { productData } from '@/app/Data'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    let {id}=useParams()
    let pdetails=productData.find((item)=>item.id==id)
  return (
    <>
      <h2>{pdetails.title}</h2>
      <img src={pdetails.images} alt="" />
    </>
  )
}

export default page
