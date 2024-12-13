'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
interface CarouselProps {
  images: string[]
  interval?: number
}


  
  

const Carousel: React.FC<CarouselProps> = ({images,  interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full max-w-3xl mx-auto h-screen overflow-hidden ">
          <div className="absolute top-0 w-full p-6 pt-0 z-30">  
              <h1 className="absolute top-20 z-30 text-white text-3xl font-bold">Hamiter Construction Company</h1>
           
            <p className="absolute top-44 z-30 text-white text-sm font-bold"></p>
            
            <Button className="absolute top-48 z-30 bg-green-500 opacity-90">Contact Us</Button>
            </div>
      {images.map((src, index) => (
        <div
          key={src}
          className={`relative w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
             
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            style={{objectFit: "fill"}}
          />
        </div>
      ))}
      {/* <div className="absolute bottom-72 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}

export default Carousel
