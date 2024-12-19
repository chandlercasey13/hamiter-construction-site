"use client";


import Carousel from "@/components/carousel"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ContactForm } from '../components/contact-form'
const images = [

  // 'https://www.aplaceformom.com/image/apfm-web-api/493754/skyline-residential-homes-care-homes-garland-tx.jpg?t=web_apfm_community_thumbnails',
  'https://cdn.brookfieldresidential.net/-/media/brp/global/modules/news-and-blog/corporate/guide-to-closing-costs/exterior-of-the-norwich-plan-in-the-traditional-collection-at-elyson-by-brookfield-residential-in-ka.jpg?rev=20bc9ee572f94fb79f97110e7327c0ab',
  '/house1.jpg',
]







export default function Home() {
    return (
    <section className="max-w-6xl">
      <div id="start-section" className=" flex flex-col items-center justify-start  h-auto bg-white text-black  ">
        
      
         
          
          <div className=" relative w-full h-80 mx-auto flex flex-col items-center justify-center  bg-gray-white
           md:h-[40rem] 
          
          
          ">
          <div className="absolute top-0 w-full p-9 pt-0 z-30 ">  
              <h1 className="absolute top-[3rem] left-[1rem] z-30 text-white text-5xl font-bold max-w-96   md:top-36 md:text-7xl   md:leading-tight  ">Hamiter Construction Company</h1>
           
            <p className="absolute top-44 z-30 text-white text-sm font-bold"></p>
            
            <Button onClick={ ()=> {const target = document.getElementById("contact-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });}
             }} className="absolute top-[14.5rem] left-[1rem] md:top-[30rem] md:left-26 md:h-12 z-30 bg-green-500 opacity-90 "  >Get Started</Button>
            </div>
         <div className="rounded-4xl">
          <Image
            src={images[0]}
            alt={`image1`}
            layout="fill"
            objectFit="cover"
            style={{objectFit: "fill"}}
            className=" rounded-md md:rounded-lg "
          />
</div>
    </div>
<div className="px-7 mt-8 w-full md:mt-12 ">

{/* <p className="text-sm font-normal h-8 mt-8 mb-2">Our Services</p> */}
     <h2 id="services-section" className="text-3xl font-semibold md:text-4xl  ">Expert Solutions for your General Contracting Needs</h2>
     <p className="mt-6 md:mt-10 font-medium md:text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. 
        </p>

        <br/>
        <ul className="list-disc px-4 md:text-lg flex flex-col gap-2 font-normal ">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</li>
  <li>Nulla quis sem at nibh elementum imperdiet.</li>
 
  
</ul>
<br/>
</div>

<div className="px-6 w-full mt-8  md:mt-12 ">

{/* <p  className="text-sm font-normal h-8 mt-8 mb-2"></p> */}
<h2 className="text-3xl font-semibold mb-4 md:mb-12 md:text-4xl  ">Our Recent Work</h2>
<Carousel images={images} interval={5000} />
{/* <img alt="picture 2" src="house1.jpg" id="about-section" className="h-50 w-full"></img> */}
{/* <p className="mt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
   odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
   Nulla quis sem at nibh elementum imperdiet.</p> */}

</div>



     <div id="about-section" className="px-6 ">

     
     {/* <p  className="text-sm font-normal h-8 mt-8 mb-2">About Us</p> */}
     <h2 className="text-3xl font-semibold mt-8  md:text-4xl md:mt-12">Quality Service from a committed company.</h2>
     <p className="mt-6 md:mt-10 md:text-lg md:leading-loose"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh.</p>
     
     </div>
     


     <div id="contact-section" className="min-h-40 w-full flex flex-col items-center justify-start mb-12 mt-12 md:mt-24 md: ">
      <div className="w-full  p-6 pt-0 space-y-4 bg-white mb-10">
        <h1 className="text-3xl font-semibold text-start pb-2">Contact Us</h1>
        <ContactForm />
      </div>


      <div className="h-2 w-full border-t "></div>


    </div>


     
      </div>

      </section>


    )
  }
  
  