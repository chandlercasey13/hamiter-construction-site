import Carousel from "@/components/carousel"


const images = [

  'https://www.aplaceformom.com/image/apfm-web-api/493754/skyline-residential-homes-care-homes-garland-tx.jpg?t=web_apfm_community_thumbnails',
  'https://cdn.brookfieldresidential.net/-/media/brp/global/modules/news-and-blog/corporate/guide-to-closing-costs/exterior-of-the-norwich-plan-in-the-traditional-collection-at-elyson-by-brookfield-residential-in-ka.jpg?rev=20bc9ee572f94fb79f97110e7327c0ab',
  '/house3.jpg',
]







export default function Home() {
    return (
      <div className="flex flex-col items-center justify-start w-full min-h-[calc(100vh-4rem)] bg-white text-black  ">
        
        
         
          
          <div className=" w-full h-full flex flex-col items-center justify-center bg-gray-100">
      {/* <h1 className="text-3xl font-bold mb-8">Auto-Scrolling Carousel</h1> */}
      <Carousel images={images} interval={5000} />
    </div>
     
      </div>




    )
  }
  
  