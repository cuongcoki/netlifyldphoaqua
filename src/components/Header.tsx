import React from 'react'
import { Search, Phone, UserRound } from "lucide-react"
import Image from 'next/image'
import { logoh } from '@/contants/images/index'
import { Input } from "@/components/ui/input"
const Header = () => {
    return (
        <main className='flex items-center justify-around bg-white'>
            <Image src={logoh} width={250} height={150} alt='logo' />
           
            <div className='w-[30%] flex items-center justify-between border-solid border-2 rounded-lg '>
                <Input type="text" placeholder="Tìm Kiếm ........" className='border-none ' />
                <Search size={35} className='mx-2 text-gray-500' />
            </div>

            <div>
                <div className='flex gap-4 items-center'>
                    <div className="flex items-center gap-2">
                        <div className='p-2 rounded-full bg-orange-500'>
                            <Phone size={35} color='white' />
                        </div>
                        <div className="font-medium dark:text-white">
                            <div>Trái cây ORGANIC</div>
                            <div className="text-xl text-gray-500 dark:text-gray-400 font-extrabold">1900  2208</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='p-2 rounded-full bg-orange-500'>
                            <UserRound size={35} color='white' />
                        </div>
                        <div className="font-medium dark:text-white">
                            <div>Đăng nhập</div>
                            <div className="text-xl text-green-600 font-extrabold">Đăng kí</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header
