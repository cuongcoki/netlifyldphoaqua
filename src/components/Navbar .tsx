import React, { useEffect, useState } from 'react'
import { navListsLandingPage } from '@/contants'
import { ShoppingCart } from 'lucide-react'
import clsx from 'clsx'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';


const Navbar = () => {
    useEffect(() => {
        // Import ScrollTrigger trong useEffect
        gsap.registerPlugin(ScrollTrigger);
        // Sử dụng ScrollTrigger tại đây
        gsap.to('#navitm', {
            opacity: 1,
            duration: 2,
            stagger: 0.25,
            y: 0
        });



    }, []); // Khai báo mảng rỗng để đảm bảo hiệu ứng chỉ được kích hoạt một lần
    const [currentPage, setCurrentPage] = useState(true)

    return (
        <section className='w-full py-5 sm:px-10 px-5 bg-green-500'>
            <div className="hidden sm:ml-6 sm:block ">
                <div id='hihi' className="flex space-x-4 justify-center items-center">
                    {navListsLandingPage.map((item, index) => (
                        <a
                            className={clsx(
                                currentPage ? 'bg-none text-black ' : 'text-black hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 hover:text-white  font-extrabold text-xl p-20 cursor-pointer opacity-0 translate-y-10'
                            )}
                            aria-current={currentPage ? 'page' : undefined}
                            id='navitm'
                            key={index}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        className={clsx(
                            currentPage ? 'bg-none text-white ' : 'text-black hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 hover:text-orange-500  font-extrabold text-xl p-20 opacity-0 translate-y-10'
                        )}
                        aria-current={currentPage ? 'page' : undefined}
                        id='navitm'
                    >
                        <div className='rounded-full border-white border-solid border-2 px-4 py-2 hover:border-orange-500'>
                            <ShoppingCart size={30} />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Navbar 
