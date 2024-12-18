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
      <div id="start-section" className=" flex flex-col items-center justify-start w-full h-auto bg-white text-black  ">
        
      
         
          
          <div className=" relative w-full h-80 flex flex-col items-center justify-center bg-gray-800">
          <div className="absolute top-0 w-full p-9 pt-0 z-30">  
              <h1 className="absolute top-20 z-30 text-white text-3xl font-bold">Hamiter Construction Company</h1>
           
            <p className="absolute top-44 z-30 text-white text-sm font-bold"></p>
            
            <Button onClick={ ()=> {const target = document.getElementById("contact-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });}
             }} className="absolute top-48 z-30 bg-green-500 opacity-90">Get Started</Button>
            </div>
         
          <Image
            src={images[0]}
            alt={`image1`}
            layout="fill"
            objectFit="cover"
            style={{objectFit: "fill"}}
          />

    </div>
<div className="px-6 ">

{/* <p className="text-sm font-normal h-8 mt-8 mb-2">Our Services</p> */}
     <h2 id="services-section" className="text-3xl font-semibold mt-12 ">Expert Solutions for your General Contracting Needs</h2>
     <p className="mt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. 
        </p>

        <br/>
        <ul className="list-disc px-4 ">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</li>
  <li>Nulla quis sem at nibh elementum imperdiet.</li>
 
  
</ul>
<br/>
</div>

<div className="px-6 w-full ">

{/* <p  className="text-sm font-normal h-8 mt-8 mb-2"></p> */}
<h2 className="text-3xl font-semibold mt-12 mb-4  ">Our Recent Work</h2>
<Carousel images={images} interval={5000} />
{/* <img alt="picture 2" src="house1.jpg" id="about-section" className="h-50 w-full"></img> */}
{/* <p className="mt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
   odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
   Nulla quis sem at nibh elementum imperdiet.</p> */}

</div>



     <div id="about-section" className="px-6 ">

     
     {/* <p  className="text-sm font-normal h-8 mt-8 mb-2">About Us</p> */}
     <h2 className="text-3xl font-semibold mt-12 ">Quality Service from a committed company.</h2>
     <p className="mt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh.</p>
     
     </div>
     


     <div id="contact-section" className="min-h-40 w-full flex flex-col items-center justify-start mb-12 mt-12 ">
      <div className="w-full max-w-md p-6 pt-0 space-y-4 bg-white mb-10">
        <h1 className="text-3xl font-semibold text-start pb-2">Contact Us</h1>
        <ContactForm />
      </div>


      <div className="h-2 w-full border-t "></div>


    </div>


     
      </div>




    )
  }
  
  