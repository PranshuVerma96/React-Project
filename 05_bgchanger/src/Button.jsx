import React from 'react'
import { useState } from "react";
const Button = () => {
   const [color, setColor] = useState("cyan");
  return (
    <div>
       <div
        className="w-full h-screen duration-300 flex flex-col justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-6xl  font-black  font-['Space_Grotesk'] bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg text-center px-4">
          Welcome to My First WebApp
        </h1>

        {/* Subtitle */}
        

        {/* Buttons */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white/20 backdrop-blur-md border border-white/30 px-5 py-4 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-2 rounded-full shadow-lg text-white font-bold hover:scale-110 duration-200"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("orange")}
              className="outline-none px-5 py-2 rounded-full shadow-lg text-white font-bold hover:scale-110 duration-200"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-2 rounded-full shadow-lg text-white font-bold hover:scale-110 duration-200"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 py-2 rounded-full shadow-lg text-white font-bold hover:scale-110 duration-200"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-5 py-2 rounded-full shadow-lg text-white font-bold hover:scale-110 duration-200"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-5 py-2 rounded-full shadow-lg text-white font-bold hover:scale-110 duration-200"
              style={{ backgroundColor: "skyblue" }}
            >
              SkyBlue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button
