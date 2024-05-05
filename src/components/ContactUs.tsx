import { contactUs } from '@/contants/images'
import { footerBG, contactusItem, contactusItem2 } from '@/contants/images'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import React,{useEffect} from 'react'
import { Card, CardContent } from './ui/card'
import { Circle } from 'lucide-react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

const ContactUs = () => {
    useEffect(() => {
        // Import ScrollTrigger trong useEffect
        gsap.registerPlugin(ScrollTrigger);
        // Sử dụng ScrollTrigger tại đây
        gsap.to('#imageCU', {
            opacity: 1,
            y: 20,
            duration: 1,
            scrollTrigger: {
                trigger: '#imageCU',
                start: 'top 85%',
                toggleActions: 'restart reverse restart reverse',
            }
        });
        gsap.to('#tittleCU', {
            opacity: 1,
            x: 20,
            duration: 1,
            scrollTrigger: {
                trigger: '#tittleCU',
                start: 'top center',
                toggleActions: 'restart reverse restart reverse',
            }
        });

        gsap.to('#textCU', {
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '#textCU',
                start: 'top center',
                toggleActions: 'restart reverse restart reverse',
            }
        });
        gsap.to('#whyICON', {
            opacity: 1,
            duration: 1,
            x:0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '#whyICON',
                start: 'top center',
                toggleActions: 'restart pause restart pause',
            }
        });

        gsap.to('#aboutICON', {
            opacity: 1,
            duration: 1,
            x:0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '#aboutICON',
                start: 'top center',
                toggleActions: 'restart pause restart pause',
            }
        });
        gsap.to('#aboutICONLinner', {
            opacity: 1,
            duration: 2,
            stagger: 0.25,
            scrollTrigger: {
                trigger: '#aboutICONLinner',
                start: 'top center',
                toggleActions: 'restart pause restart pause',
            }
        });
       
     

    }, []); // Khai báo mảng rỗng để đảm bảo hiệu ứng chỉ được kích hoạt một lần
    return (
        <main className='mt-8'>
            <section className='h-[100px]'>
            </section>
            <section className='container flex items-start justify-between '>
                <div className='w-[50%]'>
                    <span className='mb-4 p-5 '>
                                
                        <h1 className='text-3xl font-semibold text-center flex justify-center items-center opacity-0 translate-x-40' id='tittleCU'> <Circle /><Circle size={30} /> <span className='mx-4'>VỀ CHÚNG TÔI</span> <Circle size={30}/><Circle /> </h1>
                    </span>
                    <div  className='text-xl flex flex-col gap-4 mb-8'>
                        <p id='textCU' className='opacity-0'>Công ty TNHH Trái cây Organic là chuỗi cửa hàng trái cây sạch hàng đầu Việt Nam. Với sứ mệnh mang đến cho người tiêu dùng Việt Nam những sản phẩm trái cây mang thương hiệu Việt và trái cây ngoại nhập với chất lượng tốt nhất. Hãy cùng Trái cây Organic chăm sóc sức khỏe gia đình bạn.  </p>
                        <p id='textCU' className='opacity-0'>Tại Trái cây Organic, các sản phẩm đều đạt tiêu chuẩn VietGAP hoặc GlobalGAP. Các sản phẩm tại Trái cây Organic được bảo quản tốt nhất, đảm bảo chất lượng nhất khi đến tay người tiêu dùng. Các đối tác của Trái cây Organic là những nhà vườn, nhà xuất khẩu, hợp tác xã hoặc những thương hiệu trái cây đã đươc kiểm chứng trong nước và trên thế giới. Nguồn gốc sản phẩm luôn rõ ràng, có khả năng truy xuất nguồn gốc với đầy đủ thông tin và chứng nhận, chứng chỉ, xuất xứ theo quy định.</p>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <Image id='imageCU' className='opacity-0 translate-y-60' src={contactUs} width={700} height={700} alt='contacus' />
                </div>
            </section>

            <section className='bg-green-400 h-[500px] relative '>
                <Image className=' w-full  transition duration-500 cursor-pointer h-full object-cover' src={footerBG} />
                <div className=' container transition duration-500 text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white'>
                    <div className='flex flex-col gap-6'>
                        <h2 className="text-3xl highlight-title text-center font-semibold text-black">TẠI SAO LỰA CHỌN CHÚNG TÔI ?</h2>
                        <p>Trái cây Organic với đa dạng các trái cây nhập khẩu đến từ các nền nông nghiệp tiên tiến, hiện đại bậc nhất thế giới: Nhật Bản, Hoa Kỳ, Hàn Quốc, Canada, Autralia,… đem đến dinh dưỡng và những sự lựa phong phú người dùng.</p>
                        <div className='flex items-center justify-between'>
                            {
                                contactusItem.map((item, index) => (
                                    <div id='whyICON' className=' flex justify-center items-center w-[200px] h-[200px] bg-white rounded-full translate-x-20 opacity-0'>
                                        <div className='flex flex-col items-center mx-0 my-auto'>
                                            <Image src={item.img} />
                                            <span className='text-black font-semibold'> {item.title}</span>
                                            <i className='text-black text-lg font-sans'> {item.bo}</i>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-[100px]'>
            </section>

            <section className='container flex flex-col justify-between gap-6'>
                <h2 className="text-3xl highlight-title text-center font-semibold text-green-600">TỔNG QUAN VỀ CHẤT LƯỢNG SẢN PHẨM CỦA TRÁI CÂY ORGANIC</h2>
                <p className='text-2xl font-medium text-center'>Chúng tôi luôn mong muốn và đã tạo ra nhiều giá trị về sức khỏe và niềm vui cho người dùng Việt. Điều đó thật hạnh phúc khi thật vinh dự vì khách hàng đã tin tưởng vào dịch vụ và sản phẩm của Trái cây Organic. Khách hàng và động lực lớn nhất để chúng tôi phát triển và lớn hơn từng ngày.F</p>
                <div className='flex text-center justify-between items-center'>
                    {
                        contactusItem2.map((item, index) => (
                            <Card className='border-none shadow-none'>
                                <Separator id='aboutICONLinner' className='h-[8px] bg-green-500 mb-1 opacity-0 translate-x+20' />
                                <div id='aboutICON' className='flex  items-start  w-[250px] h-[400px] bg-slate-100 rounded-b-[999px] translate-x-20 opacity-0'>
                                    <CardContent className='mt-2'>
                                        <div className='flex flex-col items-center mx-0 my-auto'>
                                            <Image src={item.img} />
                                            <span className='text-green-600 text-2xl font-semibold my-5'> {item.title}</span>
                                            <i className='text-black text-lg font-sans'> {item.bo}</i>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        ))
                    }

                </div>
            </section>

            <section className='h-[100px]'>
            </section>

        </main>
    )
}

export default ContactUs
