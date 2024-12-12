import Carousel from "@/components/carousel"


const images = [

  '/house1.jpg',
  '/house2.jpg',
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
  
  