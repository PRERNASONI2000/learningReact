import React from "react";
import { motion } from "framer-motion";
import SplitText from "../../Reactbits/SplitText/SplitText";
import CircularText from "../../Reactbits/CircularText/CircularText";
import DotGrid from "..//../Reactbits/DotGrid/DotGrid";
import SplashCursor from "..//../Reactbits/SplashCursor/SplashCursor";
import Orb from "..//../Reactbits/Orb/Orb";
import { ShieldCheck } from "lucide-react";



const Home = ({ backendMessage }) => {
  return (
    <>
      <SplashCursor />
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
        />
        <div className="absolute z-10 text-center pb-0">
          <h1 className="pt-serif font-bold text-4xl bg-gradient-to-r py-6 from-primary to-secondary bg-clip-text text-transparent">
            SmartLearning, Learn limitless & Earn effortless
          </h1>
          <p className="text-semibold text-lg leading-6 text-base-content">
            Learn at your own pace with expert-led courses designed to help you <br /> grow, achieve, and succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center justify-center">
            <div className="p-0"> <img
              className="border-b-8 border-b-cyan-500"
              src="https://elearning-adbi.org/wp-content/uploads/2025/02/Digital-Public-Infrastructure-DPI-Foundations-Applications-and-Future-Pathways-300x193.png" alt="Album" />
              </div>
            <div className="p-0">
              <ul className="list-none text-base-content space-y-2 text-left">
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Learn at your own pace with expert-led courses.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Access hundreds of interactive lessons anytime, anywhere.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Track your progress and achieve your learning goals.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Earn certificates to showcase your skills.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Join a community of learners and share knowledge.</li>
              </ul>

            </div>
          </div>

        </div>

      </div>


      {/* <div className="flex items-center flex-col justify-center h-screen bg-base-300 w-full">
      <h1 className="text-4xl font-bold text-blue-600">Home Page</h1>
      <input type="checkbox" className="checkbox checkbox-secondary" />
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title {backendMessage }</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Home;