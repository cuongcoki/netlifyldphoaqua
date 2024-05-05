import { footerBG, footerLogof, logoDaThongBao } from '@/contants/images'
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MapPin, Phone, Globe, Mail, Facebook, Instagram, Twitch, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <div className='bg-green-500  bg-footer-texture relative '>
            <Image className=' w-full  transition duration-500 cursor-pointer h-full object-cover' src={footerBG} />
            <div className=' container transition duration-500 text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white'>
                {/* // contact */}
                <div className='flex justify-between  items-center'>
                    <Image src={footerLogof} />
                    <Input placeholder='Nhập Số Điện Thoại ...' className='m-5 rounded-3xl p-8' />
                    <Button className='bg-orange-500 rounded-3xl p-8 text-xl'>Nhận Ưu Đãi</Button>
                </div>
                {/* // infor */}
                <div className='flex justify-between mt-4'>
                    <div >
                        <p className='text-3xl font-serif '> CÔNG TY TNHH TRÁI CÂY ORGANIC</p>
                        <div className='[&>p]:mt-4 [&>p]:flex [&>p]:items-center '>
                            <p><MapPin size={30} className='mr-3' />số 8, tổ 12, phường tân thịnh, TPTB, Thái Nguyên</p>
                            <p> <Phone size={30} className='mr-3' /><span>1900 2208 -0369172681</span></p>
                            <p><Globe size={30} className='mr-3' />Website-www.traicayorganic.com.vn</p>
                            <p><Mail size={30} className='mr-3' />traicayorganic@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex  justify-between'>
                        <div className='mr-5'>
                            <p className='text-3xl font-serif'>VỀ CHÚNG TÔI</p>
                            <ul className='items-start flex flex-col [&>li]:p-1 [&>li]:cursor-pointer'>
                                <li>Trang Chủ</li>
                                <li>Sản Phẩm</li>
                                <li>Tin Tức</li>
                                <li>Về Chúng Tôi</li>
                                <li>Hệ Thống Cửa Hàng</li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-3xl font-serif'>HỖ TRỢ KHÁCH HÀNG</p>
                            <ul className='items-start flex flex-col [&>li]:p-1 [&>li]:cursor-pointer'>
                                <li>Chính Sách Giao Hàng</li>
                                <li>Chính Sách Đổi Trả Hàng</li>
                                <li>Bảo Mật Thông Tin Cá Nhân</li>
                                <li>Hình Thức Thanh Toán</li>

                            </ul>
                            <div className='mt-3'>
                                <p>Kết Nối Với Chúng Tôi</p>
                                <div className='flex items-center justify-between w-[200px] m-auto p-4 cursor-pointer'>
                                    <Facebook />
                                    <Instagram />
                                    <Twitch />
                                    <Twitter />
                                    <Youtube />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // */}
                <Image src={logoDaThongBao} className=' m-auto' />
                <div className='mt-20'>
                    <i className='mt-20 font-light font-sans text-slate-100'>Copyright 2024 © Trai Cay Organic - All Rights reserved | Design by : Nhat Le</i>
                </div>
            </div>
        </div>
    )
}

export default Footer 
