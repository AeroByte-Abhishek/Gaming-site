import React from 'react'
import image from '../assets/images/dystopian-landscape-with-futuristic-city-people.jpg'

function AboutUs() {
  return (
    <div className='h-screen w-full bg-gray-950 relative'>
      <img 
        src={image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className='w-full border-2 border-gray-700'></div>
      <div className="relative z-10 flex flex-col items-start mt-[9vw] h-full px-[10vw] text-[#8cefe9] ">
          <h1 className="text-[4vw] mr-[2.5vw] font-bold leading-tight">
            About Us
          </h1>
          <h3 className="mt-4 mr-[3vw] max-w-md text-gray-300 text-lg leading-relaxed">
          This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
          </h3>

          <button className="px-[4vw] py-[1.2vw] bg-[#8cefe9] font-semibold text-lg mr-[19.5vw] mt-12 text-black rounded-r-full">
            Learn More
          </button>
        </div>
      
    </div>
  )
}

export default AboutUs