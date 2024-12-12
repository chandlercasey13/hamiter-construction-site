import Carousel from "@/components/carousel"
import { Button } from "@/components/ui/button"


const images = [

  // 'https://www.aplaceformom.com/image/apfm-web-api/493754/skyline-residential-homes-care-homes-garland-tx.jpg?t=web_apfm_community_thumbnails',
  'https://cdn.brookfieldresidential.net/-/media/brp/global/modules/news-and-blog/corporate/guide-to-closing-costs/exterior-of-the-norwich-plan-in-the-traditional-collection-at-elyson-by-brookfield-residential-in-ka.jpg?rev=20bc9ee572f94fb79f97110e7327c0ab',
  // '/house3.jpg',
]







export default function Home() {
    return (
      <div className=" flex flex-col items-center justify-start w-full h-[calc(100vh-3.5rem)] bg-white text-black  ">
        
        
         
          
          <div className=" relative w-full h-1/2 flex flex-col items-center justify-center bg-gray-800">
      <h1 className="absolute top-36 z-30 text-white text-3xl font-bold">Contracting Services</h1>
      <Button className="absolute top-64 z-30">Contact Us</Button>

      <Carousel images={images} interval={5000} />
    </div>
     <div className="h-1/2 px-6">
     <p className="text-sm font-normal h-8 mt-6 mb-2">About Us</p>
     <h2 className="text-3xl font-semibold ">Quality Service from a committed company.</h2>
     <p className="mt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh elementum imperdiet.</p>
     
     </div>
      </div>




    )
  }
  
  