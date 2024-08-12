import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <section className='bg-[#39474F] py-5'>
                <div className="container flex gap-2 justify-between">
                    <div className='w-[20%] flex flex-wrap gap-2 items-center justify-center text-white'>
                        <img className='w-full' src="https://www.digitalsahuji.com/storage/app/public/company/2023-06-27-649a72e490fce.png" alt="" />
                        <h2 className='uppercase font-bold'>Download Our App</h2>

                        <img className='w-[60%]' src="https://www.digitalsahuji.com/public/assets/front-end/png/google_app.png" alt="" />

                    </div>
                    <div className='w-[20%] text-white'>
                        <h2 className='uppercase font-bold py-2'>Special</h2>
                        <ul className='text-white'>
                            <Link href='/'><li>Featured Products</li></Link>
                            <Link href='/'><li>Latest Products</li></Link>
                            <Link href='/'><li>Best Selling Products</li></Link>
                            <Link href='/'><li>Top Rated Products</li></Link>
                            <Link href='/'><li>Register as a student</li></Link>
                        </ul>
                    </div>

                    <div className='w-[20%] text-white'>
                        <h2 className='uppercase font-bold py-2'>Account & Shipping</h2>
                        <ul className='text-white'>
                            <Link href='/'><li>Profile Info</li></Link>
                            <Link href='/'><li>Wish List</li></Link>
                            <Link href='/'><li>Track Order</li></Link>
                            <Link href='/'><li>Refund Policy</li></Link>
                            <Link href='/'><li>Return Policy</li></Link>
                            <Link href='/'><li>Cancellation Policy</li></Link>
                        </ul>
                    </div>

                    <div className='w-[30%] text-white'>
                        <h2 className='uppercase font-bold py-2'>News Letter</h2>
                        <p>Subscribe to our new channel to get latest updates</p>
                        <form className='my-2' action="" >
                            <input className='p-3' type="text" placeholder='Your Email Address' />
                            <button className='bg-secondary p-3'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className=''>
                        <div className='flex'>
                            <h2>Start a Conversation</h2>
                            <hr/>
                        </div>
                        <div className='flex justify-between gap-4 items-center'>
                            <p>9801433555</p>
                            <p>info@digitalsahuji.com</p>
                        </div>
                    </div>
                    <div className='flex justify-end gap-4 items-center'>
                        <div>
                            <h2>Start a Conversation</h2>
                            <hr/>
                        </div>
                        <div className='flex justify-between gap-4 items-center'>
                            <p>9801433555</p>
                            <p>info@digitalsahuji.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
