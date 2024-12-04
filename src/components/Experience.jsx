import React from 'react'

function Experience() {
  return (
    <div className='w-full h-screen bg-gray-900'>
        <div className='w-full border-2 border-gray-700'></div>
        

        <div className="relative flex px-14 text-red-500 ">
            
        <div className='h-[35vw] w-[35vw] bg-gray-600 mt-[6.7vw] ml-[11vw] mr-[17vw]'></div>
        <div className='flex-col mt-[10.7vw]'>
          <h1 className="text-6xl mr-[2.5vw] font-bold leading-tight">
            A Perfect Gaming Experience
          </h1>
          <h3 className=" glow-text-p mt-4 mr-[3vw] max-w-md text-gray-300 text-lg leading-relaxed">
            Describe the product here. Include important features,pricing and other relevant info.
             Consider adding an image or video of the product.
          </h3>

          <button className="water-button px-14 py-4 bg-red-500 font-semibold text-lg mr-[19.5vw] mt-12 text-white rounded-full">
            Explore
          </button>
          </div>
        </div>
      
    </div>
  )
}

export default Experience;
