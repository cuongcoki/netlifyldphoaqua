import Image from 'next/image'
import React, { useEffect } from 'react'

import { bgHoverCategory, category } from '@/contants/images'
import { Button } from './ui/button'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
gsap.registerPlugin(useGSAP)

const Highlights = () => {

    useEffect(() => {
        // Import ScrollTrigger trong useEffect
        gsap.registerPlugin(ScrollTrigger);

        // Sử dụng ScrollTrigger tại đây
        gsap.to('#features_title', {
            opacity: 1,
            y: 10,
            duration: 1,
            scrollTrigger: {
                trigger: '#features_title',
                start: 'top 85%',
                toggleActions: 'restart reverse restart reverse',
            }
        });
        gsap.to('#Category', {
            opacity: 1,
            duration: 1,
            stagger: 0.25,
            scrollTrigger: {
                trigger: '#Category',
                start: 'top 95%',
                toggleActions: 'restart reverse restart reverse',
            }
        });
        gsap.to('#TitleCategory', {
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '#TitleCategory',
                start: 'top 85%',
                toggleActions: 'restart reverse restart reverse',
            }
        });
    }, []); // Khai báo mảng rỗng để đảm bảo hiệu ứng chỉ được kích hoạt một lần
    return (
        <div className='m-6 container items-center justify-center  mx-auto '>
            <section>
                <h2 id="features_title" className="text-3xl highlight-title text-center font-semibold mb-8 opacity-0 translate-y-20">CÁC SẢN PHẨM, DỊCH VỤ CỦA ORGANIC</h2>

                <div className='grid grid-cols-3 gap-4 items-center justify-center'>
                    {category.map((item, index) => (
                        <div key={index}
                            id='Category'
                            className='[&>img]:hover:scale-105 [&>img]:hover:blur-md cursor-pointer
                        relative h-[250px] rounded-lg overflow-hidden shadow-md
                        [&>div]:hover:opacity-0
                        [&>span]:hover:opacity-100
                        opacity-0
                        '
                        >
                            <Image src={item.img} className=' transition duration-500 cursor-pointer w-full h-full object-cover' alt="Ảnh của danh mục" />
                            <div className=' transition duration-500 text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white'>
                                <Image className=' relative m-auto w-[280px] color  opacity-80 hover:none  transition duration-700 cursor-pointer  object-cover' src={bgHoverCategory} alt='hihi'/>
                                <span id='TitleCategory' className=' shadow-sm w-[150px] m-auto text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white opacity-0'>{item.title}</span>
                            </div>
                            <span className=' opacity-0 transition duration-500 text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white'>
                                <span className=' text-3xl font-serif'>{item.eng}</span>
                                <p className='text-lg font-light text-inherit my-2'>
                                    {item.p}
                                </p>
                                <Button className='bg-green-500 hover:bg-green-700'>Xem Thêm</Button>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    )
}

export default Highlights 
