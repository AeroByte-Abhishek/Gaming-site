import React from 'react'


function Cards({ data }) {
    // const {image, description, name} = data;

    return (
        <>
            <div className='h-screen w-full bg-gray-950'>
                <div className='w-full border-2 border-gray-700'></div>
                <h1 className='text-[2vw] font-semi-bold leading-2 text-[#8cefe9] text-center mt-[3vw]' style={{ fontFamily: 'Comic sans MS' }}>More Games</h1>

                <div className='flex flex-wrap container mr-[5vw]'>
                    {data.map((item, index) => (
                        <React.Fragment key={index} >
                            <div className='h-[34vw] mt-[4vw] bg-gray-900 top-10 w-[27vw] p-[2vw] ml-[5vw] rounded-2xl transition-all duration-500 ease-in-out hover:shadow-[0_0_20px_7px_rgba(140,239,233,0.7)]'>
                                <div className='h-[17vw] rounded-xl'>
                                    <img className='h-[17vw] rounded-xl w-full' src={item.image} alt={item.name} />
                                </div>
                                <h4 className='text-white text-[1.2vw] mt-[2vw] text-center font-serif font-family'>{item.description}</h4>
                                <div className='flex flex-col justify-self-center mt-6'>
                                    <button className="px-[3.5vw] py-[1vw] bg-[#8cefe9] hover:bg-transparent hover:border-2 hover:text-white hover:border-gray-300 font-medium text-[1.2vw] text-black rounded-full transition-all duration-500 ease-in-out">
                                        Play Now
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </>
    )
}


export default Cards;