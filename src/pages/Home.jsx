import React from "react";
import { motion } from "framer-motion";
import SplitText from "../../Reactbits/SplitText/SplitText";
import CircularText from "../../Reactbits/CircularText/CircularText";
import DotGrid from "..//../Reactbits/DotGrid/DotGrid";
import SplashCursor from "..//../Reactbits/SplashCursor/SplashCursor";
import { ShieldCheck } from "lucide-react";
import { ArrowRight } from "lucide-react";
import CurvedLoop from "../../Reactbits/CurvedLoop/CurvedLoop"



const Home = ({ backendMessage }) => {
  return (
    <>
      <SplashCursor />
      <div className="relative w-full h-[800px] flex items-center justify-center">
        <DotGrid
          dotSize={1}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
        />
        <div className="absolute z-10 text-center pb-0">

          <h1 data-aos="fade-up" className="pt-serif font-bold text-4xl bg-gradient-to-r pb-2 from-primary to-secondary bg-clip-text text-transparent">
            SmartLearning, Learn limitless & Earn effortless
          </h1>
          <p data-aos="fade-up" className="text-semibold text-lg leading-6 text-base-content">
            Learn at your own pace with expert-led courses designed to help you <br className="hidden md:block" /> grow, achieve, and succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center justify-center">
            <div className="p-0" data-aos="fade-right"> <img data-aos="flip-up"
              className="border-b-8 border-b-cyan-500 w-80 mx-auto"
              src="https://elearning-adbi.org/wp-content/uploads/2025/02/Digital-Public-Infrastructure-DPI-Foundations-Applications-and-Future-Pathways-300x193.png" alt="Album" />
            </div>
            <div className="p-0" data-aos="fade-left">
              <ul className="list-none text-base-content space-y-2 text-left">
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Learn at your own pace with expert-led courses.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Access hundreds of interactive lessons anytime, anywhere.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Track your progress and achieve your learning goals.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Earn certificates to showcase your skills.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Join a community of learners and share knowledge.</li>
              </ul>

            </div>
          </div>
          <button data-aos="flip-up" class="btn mt-15 uppercase text-lg bg-pink-700 text-white rounded-full h-15 md:w-100 w-50 py-4">
            enroll your course now <ArrowRight />
          </button>

        </div>

      </div>
      <div className="w-full h-[300px]">

        <CurvedLoop
          marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
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