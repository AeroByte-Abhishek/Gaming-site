import React from "react";
import "../App.css";
import videoSrc from "../assets/videos/background.mp4";
import { motion } from "framer-motion"

function Landing() {

  const textAnime = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.2
      }
    }
  }


  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* for better readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <motion.div initial="hidden" animate="show" variants={textAnime} className="relative z-10 flex flex-col items-end justify-center h-full px-14 text-red-500 ">
          <h1 className="glow-text text-6xl mr-[2.5vw] font-bold leading-tight">
            JOIN THE GAME
          </h1>
          <h3 className=" glow-text-p mt-4 mr-[3vw] max-w-md text-gray-300 text-lg leading-relaxed">
            Experience the thrill of immersive gameplay, epic battles, a
            limitless fun. Whether you're a casual player or a hardcore gamer,
            we've got something for everyone. Gear up, take control, and make
            every moment legendary!
          </h3>

          <button className="water-button px-14 py-4 bg-red-500 font-semibold text-lg mr-[19.5vw] mt-12 text-white rounded-full">
            Explore
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default Landing;
