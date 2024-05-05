import Autoplay from "embla-carousel-autoplay"
import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { banner11, banner } from "@/contants/images/index";
import Image from "next/image";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true  , loop:true})
  )
  return (
    <div className="flex items-center justify-center w-[full] ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}

      >
        <CarouselContent >
          {banner?.map((item,index) => (
            <CarouselItem
              key={index}
            >
              <Image src={item.img} alt=""  className="w-full object-cover bg-cover bg-center  bg-no-repeat relative pointer-events-none"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero 
