import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { blogh } from '@/contants/images'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';


const Blog = () => {
    useEffect(() => {
        // Import ScrollTrigger trong useEffect
        gsap.registerPlugin(ScrollTrigger);
        // Sử dụng ScrollTrigger tại đây
        gsap.to('#features_titleblog', {
            opacity: 1,
            y: 10,
            duration: 1,
            scrollTrigger: {
                trigger: '#features_titleblog',
                start: 'top center',
                toggleActions: 'restart reverse restart reverse',
            }
        });

        gsap.to('#hotimage', {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#hotimage',
                start: 'top center',
                toggleActions: 'restart reverse restart reverse',
            }
        });
        gsap.to('#contenthotimage', {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '#contenthotimage',
                start: 'top center',
                toggleActions: 'restart reverse restart reverse',
            }
        });
        gsap.to('#conblog', {
            opacity: 1,
            duration: 1,
            stagger: 0.25,
            scrollTrigger: {
                trigger: '#conblog',
                start: 'top center',
                toggleActions: 'restart reverse restart reverse',
            }
        });

        gsap.to('#conima', {
            duration: 1,
            stagger: 0.25,
            scale: 1,
            ease: 'power1',
            scrollTrigger: {
                trigger: '#conima',
                start: 'top 85%',
                toggleActions: 'restart reverse restart reverse',
                scrub: 5.5
            }

        });

        ScrollTrigger.create({
            trigger: '#dialogg',
            start:'top center',
            end:'top 100px',
            onEnter: () => setOpenDialog(true),
            onLeaveBack: () => setOpenDialog(false),
        })

    }, []); // Khai báo mảng rỗng để đảm bảo hiệu ứng chỉ được kích hoạt một lần

    const [openDialog, setOpenDialog] = useState(false);
    const handelOnclick =()=>{
        setOpenDialog(false)
    }
    return (
        <div className='  container h-screen mb-8'>
            <h2 id='features_titleblog' className="text-3xl highlight-title text-center font-semibold mb-8 opacity-0 translate-y-20">BÀI VIẾT CỦA ORAGNIC</h2>
            <div className='flex gap-4 h-[800px]'>
                <div className='w-[70%]'>
                    <h2 className='text-2xl text-green-500 font-semibold mb-3 text-center'>Bài Viết Hot Nhất Hôm Nay</h2>
                    <Card className=" flex">
                        <div className='w-[70%]'>
                            <Image id='hotimage' src={blogh} className='w-full opacity-0 translate-x-40' alt='hi'/>
                        </div>
                        <CardContent className='w-[30%] '>
                            <div id='contenthotimage' className='opacity-0 '>
                                <CardTitle>Create project</CardTitle>
                                <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est recusandae vel dolores nesciunt beatae molestiae quia itaque ab eaque.</CardDescription>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='w-[30%]'>
                    <h2 className='text-2xl text-green-500 font-semibold mb-3 text-center'>Có Thể Bạn Sẽ Thích Bài Viết</h2>
                    <div className='flex flex-col gap-4'>
                        <Card id='conblog' className="w-full opacity-0">
                            <CardContent className="flex flex-col justify-start items-start p-2 ">
                                <div className='overflow-hidden w-full'>
                                    <Image id='conima' src={blogh} className="w-full h-[200px] object-cover object-center scale-150 " alt='hi'/>
                                </div>
                                <div>
                                    <CardTitle>Create project</CardTitle>
                                    <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est recusandae vel dolores nesciunt beatae molestiae quia itaque ab eaque.</CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                        <Card id='conblog' className="w-full opacity-0">
                            <CardContent className="flex flex-col justify-start items-start p-2 ">
                                <div className='overflow-hidden w-full'>
                                    <Image id='conima' src={blogh} className="w-full h-[200px] object-cover object-center scale-150 " alt=''/>
                                </div>
                                <div>
                                    <CardTitle>Create project</CardTitle>
                                    <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est recusandae vel dolores nesciunt beatae molestiae quia itaque ab eaque.</CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div id='dialogg'>
                <Dialog open={openDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Chúc Cậu Mai Thi Tốt Nhé</DialogTitle>
                            <DialogDescription>
                                <Button onClick={handelOnclick}>Bye Bye</Button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Blog
