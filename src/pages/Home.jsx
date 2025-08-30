import React from "react";
import { motion } from "framer-motion";
import SplitText from "../../Reactbits/SplitText/SplitText";
import CircularText from "../../Reactbits/CircularText/CircularText";

const Home = ({backendMessage}) => {
  return (
   <>
 <SplitText
  text="Hello, GSAP! Hello, GSAP! Hello, GSAP! Hello, GSAP! Hello, GSAP! Hello, GSAP! Hello, GSAP! Hello, GSAP! Hello, GSAP!"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>

    <div className="flex items-center flex-col justify-center h-screen bg-base-300 w-full">
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
    </div>
   </>
  );
}

export default Home;