"use client";

import BlurFade from "@/components/ui/blur-fade";
// import { FadeText } from "@/components/ui/fade-text";






import Carousel from "@/components/carousel"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ContactForm } from '../components/contact-form'
const images = [

  
  'https://cdn.brookfieldresidential.net/-/media/brp/global/modules/news-and-blog/corporate/guide-to-closing-costs/exterior-of-the-norwich-plan-in-the-traditional-collection-at-elyson-by-brookfield-residential-in-ka.jpg?rev=20bc9ee572f94fb79f97110e7327c0ab',
 
  'https://www.thehousedesigners.com/images/plans/01/JBZ/bulk/9463/3141-day-rendering.webp'
]




const BLUR_FADE_DELAY = 0.04;




export default function Home() {
    return (
    <section className="max-w-6xl overflow-x-hidden   ">
      <BlurFade delay={BLUR_FADE_DELAY} direction="up">
      <div id="start-section" className=" flex flex-col items-center justify-start  h-auto  bg-white text-black overflow-y-hidden  ">
        
      
      
          
          <div className=" relative w-full h-[24rem] mx-auto flex flex-col items-center justify-center overflow-y-hidden  bg-gray-white
           md:h-[57rem] 
          
          
          ">
           
          <div className="absolute top-0 w-full  p-9 pt-0 z-30 ">  
              <h1 className="absolute top-[3.8rem] left-[1.5rem] z-30 text-white text-[3.4rem] leading-tight font-bold max-w-96   md:top-[11rem] md:text-[7.5rem] md:left-[3rem]   md:leading-tight  ">Hamiter Construction Company</h1>
           
            <p className="absolute top-44 z-30 text-white text-sm font-bold"></p>
            
            <Button onClick={ ()=> {const target = document.getElementById("contact-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });}
             }} className="absolute top-[18.5rem] left-[1.75rem] md:top-[43rem] md:left-[5rem] md:h-16 md:w-40 md:text-lg z-30 bg-green-500 opacity-90 "  >Get Started</Button>
            </div>
            
         <div className="rounded-4xl   ">
          <Image
            src={images[0]}
            alt={`image1`}
            layout="fill"
            objectFit="cover"
            style={{objectFit: "fill"}}
            className=" rounded-md md:rounded-none  "
          />
</div>

    </div>



<div className="  w-full md:mt-2 flex justify-center p-2   " >
<div className="w-full rounded-lg p-4 " id="services-section">

{/* <p className="text-sm font-normal h-8 mt-8 mb-2">Our Services</p> */}
     <h2  className="text-[1.7rem] font-semibold md:text-4xl   ">Expert Solutions for your Contracting Needs</h2>
     <p className="mt-4 md:mt-10 font-medium md:text-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. 
        </p>

        <br/>
        <ul className="list-disc  px-4 md:text-lg flex flex-col gap-2 md:gap-3 font-normal ">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</li>
  <li>Nulla quis sem at nibh elementum imperdiet.</li>
 
  
</ul>
<br/>
</div>
</div>

<div className="p-2 md:p-0 w-full   ">
<div className="p-4 md:p-0   ">

{/* <p  className="text-sm font-normal h-8 mt-8 mb-2"></p> */}
<h2 className="text-3xl font-semibold mb-4 md:mb-6 md:text-4xl md:p-6   ">Our Recent Work</h2>
<Carousel images={images} interval={5000} />
{/* <img alt="picture 2" src="house1.jpg" id="about-section" className="h-50 w-full"></img> */}
{/* <p className="mt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
   odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
   Nulla quis sem at nibh elementum imperdiet.</p> */}

</div>
</div>




     <div className="w-full flex justify-center p-2">

     
     <div className=" w-full p-4 rounded-lg  md:mt-2 " id="about-section">
     <h2 className="text-3xl font-semibold   md:text-4xl ">Quality Service from a committed company.</h2>
     <p className="mt-6 leading-[1.8rem] md:mt-10 md:text-lg  md:leading-[2.5rem]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh.</p>
     
     </div>
     </div>

     <div  className="min-h-40 w-full flex flex-col items-center justify-start mb-6 mt-2  md: ">
      <div className="w-full p-2  space-y-4 bg-white mb-10 flex justify-center" >
      <div className="p-4 w-full rounded-lg  " id="contact-section">
        <h1 className="text-3xl font-semibold text-start pb-2 mb-4">Contact Us</h1>
        <ContactForm  />
        </div>
      </div>


      <div className="h-[.5rem] w-full border-t flex items-center justify-start pt-5 px-4  ">

      <img className="pl-2 h-4 pt-[.01rem]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZZJREFUSEu1VdtxAjEMFJUklKEvoJKESkIqIakk8KUyQieJ1yNpdH6dPzjPMOb80K5WD+9o47Hb2D6tAojIkYgORIQZv0eabzrfmRn/u6MLICKvRHRVoyMbADwxM+ZqNAFE5F2N4wIufiUjma0Cw5OXtIdzIJLPMPNniVABFMZx6dyjr2Bvaf+iZy4lyAJAL/zqYbg91NeAA6lKrhLgRzVfMNdAf4Qgw/ZCEhHBPjy5MfPJwB0gsmDmfYNdS6kzMyM+pN6DIGLi3kcAY+A6KnNcwsjragjfRzMeyFQ2IgBSElkRWdlaFbyWO4GQyxQBEFy4t7ecFpFqbVQQIUkeJvNTATQWf5iTnNl2BLAM8gCJiK3NSmQF6lk4G2Sr5m+VCFIeyqIKqeqEIgDKH4xdP3XZMmOYpnrWYuaJMltoYGyFZkBloZmc7UILxWKtYkp3vWfe49OzcBHkTuWuggTdYaLqX712HXW3B+auDw0M5SCHdu2VXgbqGQ8OOi6COv/gRBZa/sYYWmO4V2stffVNHrWGmb3NAf4Byiv2GbczExsAAAAASUVORK5CYII="/>
<p className="text-sm text-black/30 pl-1">Hamiter Construction, LLC. All Rights Reserved</p>
      </div>


    </div>


     
      </div>
      </BlurFade>
      </section>


    )
  }
  
  