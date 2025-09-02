import React from "react";
import { motion } from "framer-motion";
import SplitText from "../../Reactbits/SplitText/SplitText";
import CircularText from "../../Reactbits/CircularText/CircularText";
import DotGrid from "..//../Reactbits/DotGrid/DotGrid";
import CountUp from "..//../Reactbits/CountUp/CountUp";
import GradientText from "..//../Reactbits/GradientText/GradientText";
import SplashCursor from "..//../Reactbits/SplashCursor/SplashCursor";
import ElectricBorder from "..//../Reactbits/ElectricBorder/ElectricBorder";
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

          <h1 data-aos="fade-up" className="pt-serif font-bold text-5xl bg-gradient-to-r pb-2 from-primary to-secondary bg-clip-text text-transparent">
            SmartLearning, Learn limitless & Earn effortless
          </h1>
          <p data-aos="fade-up" className="text-semibold text-lg leading-6 text-base-content">
            Learn at your own pace with expert-led courses designed to help you <br className="hidden md:block" /> grow, achieve, and succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center justify-center">
            <div className="p-0" data-aos="fade-right"> <img
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
      <div className="w-full h-[300px] py-5" data-aos="fade-up">

        <CurvedLoop
        marqueeText="Learn ✦ Code ✦ Create ✦ Shine ✦ Explore ✦ Build ✦ Grow ✦ Succeed ✦"
          speed={5}
          curveAmount={250}
          direction="right"
          interactive={true}
          className="text-blue-700 text-shadow-lg"
        />
      </div>

      <div className="w-full h-[500px] text-center py-5">
        <div className="stats shadow-lg inline-flex flex-col sm:flex-row gap-4 sm:gap-6" data-aos="fade-up">
  {/* Total Likes */}
  <div className="stat flex-1">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">
      <CountUp
        from={0}
        to={25}
        separator=","
        suffix="K+"
        direction="up"
        duration={1}
        className="count-up-text font-extrabold"
      />
    </div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  {/* Success Rate */}
  <div className="stat flex-1">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Success Rate</div>
    <div className="stat-value text-secondary">
      <CountUp
        from={0}
        to={92}
        separator=","
        suffix="%"
        direction="up"
        duration={1}
        className="count-up-text font-extrabold"
      />
    </div>
    <div className="stat-desc">Top achievers this month</div>
  </div>

  {/* Active Learners */}
  <div className="stat flex-1">
    <div className="stat-figure text-secondary">
      <div className="avatar avatar-online">
        <div className="w-16 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            alt="learner"
          />
        </div>
      </div>
    </div>
    <div className="stat-value">
      <GradientText>
        <CountUp
          from={0}
          to={5000}
          separator=","
          suffix="+"
          direction="up"
          duration={1}
          className="count-up-text font-extrabold"
        />
      </GradientText>
    </div>
    <div className="stat-title">Active Learners</div>
    <div className="stat-desc text-secondary">+500 new this week</div>
  </div>
</div>

      </div>

      <div className="w-full h-full text-center py-5">
<SplitText
  text="Meet Our Popular Courses"
  className="text-5xl font-bold text-center text-primary pb-10"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
/>

<div className="flex flex-col md:flex-row gap-10 items-center w-full px-8 mt-5">
  <div className="w-fit h-full text-center bg-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
      <ElectricBorder
  // color="#7df9ff"
  color="#93C5FD"
  speed={0}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 20 }}
  className="shadow-none"
>
 <div className="shadow-none py-8 px-6 leading-6">
    <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" className="w-full h-auto block mx-auto pb-6" alt="course1" />
      <h3 className="text-xl font-semibold pt-serif">HTML & CSS Fundamentals</h3>
      <p className="opacity-80 mt-2">Beginner • 3 Weeks</p>
      <p className="opacity-70 mt-2">Build responsive web pages and pixel perfect website.</p>
      <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-cotent rounded-lg transition-all duration-100 ease-in-out hover:scale-110">
       <a href=""> Start Learning</a>
      </button>
    </div>
</ElectricBorder>
  </div>
    <div className="w-fit h-full text-center bg-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
      <ElectricBorder
  // color="#7df9ff"
  color="#93C5FD"
  speed={0}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 20 }}
  className="shadow-none"
>
<div className="shadow-none py-8 px-6 leading-6">
  <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg" className="w-full h-auto block mx-auto pb-6 rounded-lg" alt="JavaScript" />
  <h3 className="text-xl font-semibold pt-serif mt-4">JavaScript Essentials</h3>
  <p className="opacity-80 mt-2">Beginner–Intermediate • 4 Weeks</p>
  <p className="opacity-70 mt-2">Master the logic, DOM manipulation, and interactivity.</p>
  <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-cotent rounded-lg transition-all duration-100 ease-in-out hover:scale-110">
    <a href="#">Start Learning</a>
  </button>
</div>
</ElectricBorder>
  </div>
    <div className="w-fit h-full text-center bg-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
      <ElectricBorder
  // color="#7df9ff"
  color="#93C5FD"
  speed={0}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 20 }}
  className="shadow-none"
>
 <div className="shadow-none py-8 px-6 leading-6">
  <img src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg" className="w-full h-auto block mx-auto pb-6 rounded-lg" alt="React" />
  <h3 className="text-xl font-semibold pt-serif mt-4">React for Beginners</h3>
  <p className="opacity-80 mt-2">Intermediate • 5 Weeks</p>
  <p className="opacity-70 mt-2">Learn components, hooks, and state management.</p>
  <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-cotent rounded-lg transition-all duration-100 ease-in-out hover:scale-110">
    <a href="#">Start Learning</a>
  </button>
</div>
</ElectricBorder>
  </div>
  
</div>
<div className="flex flex-col md:flex-row gap-5 items-center w-full px-3 mt-5">
   <div className="w-fit h-full text-center bg-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
      <ElectricBorder
  // color="#7df9ff"
  color="#93C5FD"
  speed={0}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 20 }}
  className="shadow-none"
>
 <div className="shadow-none py-8 px-6 leading-6">
  <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" className="w-full h-auto block mx-auto pb-6 rounded-lg" alt="Tailwind CSS" />
  <h3 className="text-xl font-semibold pt-serif mt-4">Tailwind CSS Mastery</h3>
  <p className="opacity-80 mt-2">Intermediate • 2 Weeks</p>
  <p className="opacity-70 mt-2">Create modern, responsive UIs faster with Tailwind.</p>
  <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-cotent rounded-lg transition-all duration-100 ease-in-out hover:scale-110">
    <a href="#">Start Learning</a>
  </button>
</div>
</ElectricBorder>
  </div>
   <div className="w-fit h-full text-center bg-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
      <ElectricBorder
  // color="#7df9ff"
  color="#93C5FD"
  speed={0}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 20 }}
  className="shadow-none"
>
 <div className="shadow-none py-8 px-6 leading-6">
  <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg" className="w-full h-auto block mx-auto pb-6 rounded-lg" alt="UI UX" />
  <h3 className="text-xl font-semibold pt-serif mt-4">UI/UX Design Basics</h3>
  <p className="opacity-80 mt-2">Beginner • 3 Weeks</p>
  <p className="opacity-70 mt-2">Understand design principles, wireframes & prototyping.</p>
  <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-cotent rounded-lg transition-all duration-100 ease-in-out hover:scale-110">
    <a href="#">Start Learning</a>
  </button>
</div>
</ElectricBorder>
  </div>
   <div className="w-fit h-full text-center bg-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
      <ElectricBorder
  // color="#7df9ff"
  color="#93C5FD"
  speed={0}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 20 }}
  className="shadow-none"
>
 <div className="shadow-none py-8 px-6 leading-6">
  <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" className="w-full h-auto block mx-auto pb-6 rounded-lg" alt="Full Stack" />
  <h3 className="text-xl font-semibold pt-serif mt-4">Full Stack Development</h3>
  <p className="opacity-80 mt-2">Advanced • 8 Weeks</p>
  <p className="opacity-70 mt-2">Frontend + Backend skills to build complete apps.</p>
  <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-cotent rounded-lg transition-all duration-100 ease-in-out hover:scale-110">
    <a href="#">Start Learning</a>
  </button>
</div>
</ElectricBorder>
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