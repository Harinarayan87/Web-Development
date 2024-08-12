import React from 'react'
import { FaPhone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

function Header() {
  return (
    <>
       <header className="font-opensans bg-bg">
          <section className="top py-2">
            <div className="container">
                  <Link className="text-black flex gap-1 items-center" href="tel:9801433555"><FaPhone/> 9801433555</Link>
            </div>
          </section>

          <section className="py-2">
            <div className="container flex justify-between items-center">
              <div className="logo">
                <img src="https://www.digitalsahuji.com/storage/app/public/company/2023-06-27-649a72e48c94a.png" className="img-fluid rounded-top" alt=""/>
              </div>
              <form className="flex items-center">
                <input className="border px-3 py-2 md:w-[550px] rounded-s" type="text" placeholder="Search here..."></input>
                <button className="border py-3 px-6 bg-secondary text-[18px] text-white rounded-e"><CiSearch /></button>
              </form>

              <div className="flex items-center gap-4">
                <div className='w-[45px] h-[45px] rounded-[50%] bg-[#f1f1f1] flex items-center justify-center relative' ><FaRegHeart />
                <span className='bg-orange-500 p-1 text-[12px] w-4 h-4 text-white rounded-[50%] absolute -top-0 -right-2 items-center flex justify-center'>0</span>
                </div>
                <div className='w-[45px] h-[45px] rounded-[50%] bg-[#f1f1f1] flex items-center justify-center' ><FaUser />
                </div>
                <div className='w-[45px] h-[45px] rounded-[50%] bg-[#f1f1f1] flex items-center justify-center relative' ><IoIosCart />
                <span className='bg-orange-500 p-1 text-[12px] w-4 h-4 text-white rounded-[50%] absolute -top-0 -right-2 items-center flex justify-center'>0</span>
                </div>
                <div className='w-[50px] flex flex-wrap'>
                  <small>My Cart</small>
                  <p>रु0</p><IoMdArrowDropdown />
                </div>
              </div>
              <div>
              </div>
            </div>  
          </section>
          <nav className='bg-secondary my-3 '>
            <div className="container">
              <ul className='flex text-white gap-3 py-5'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>All Brands</Link></li>
                <li><Link href='/'>Discounted Products</Link></li>
                <li><Link href='/'>Dealer Zone</Link></li>
                <li><Link href='/'>Contact US</Link></li>
              </ul>
            </div>

          </nav>
        </header>
    </>
  )
}

export default Header
