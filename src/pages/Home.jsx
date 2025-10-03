import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Eye,
  GraduationCap,
  Award,
  Users,
  ChevronUp
} from "lucide-react";


import SplitText from "../../Reactbits/SplitText/SplitText";
import CircularText from "../../Reactbits/CircularText/CircularText";
import DotGrid from "..//../Reactbits/DotGrid/DotGrid";
import CountUp from "..//../Reactbits/CountUp/CountUp";
import GradientText from "..//../Reactbits/GradientText/GradientText";
// import SplashCursor from "..//../Reactbits/SplashCursor/SplashCursor";
import ElectricBorder from "..//../Reactbits/ElectricBorder/ElectricBorder";
import SpotlightCard from "..//components/SpotlightCard";
import TiltedCard from "..//components/TiltedCard";
import { ShieldCheck, X } from "lucide-react";
import { ArrowRight } from "lucide-react";
import CurvedLoop from "../../Reactbits/CurvedLoop/CurvedLoop";
import { LogoLoop } from "../../Reactbits/LogoLoop/LogoLoop";
import ScrollStack from "../components/ScrollStack";
import { ScrollStackItem } from "../components/ScrollStack";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "../components/ui/accordion";



const Home = ({ backendMessage }) => {

  const techLogos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", alt: "React Logo 2" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", alt: "HTML5" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png", alt: "JavaScript" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", alt: "CSS3" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", alt: "Sass" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", alt: "Bootstrap" },
  ];


  return (
    <>
      {/* <SplashCursor /> */}
      <div className="relative w-full md:h-[700px] h-[1000px] flex justify-center items-center">
        <DotGrid
          dotSize={1}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
        />
        <div className="absolute z-10 text-center md:pb-0 pt-6 pb-20 px-6">

          <h1 data-aos="fade-up" className="pt-serif font-bold text-5xl bg-gradient-to-r pb-2 from-primary to-secondary bg-clip-text text-transparent">
            SmartLearning, Learn limitless & Earn effortless
          </h1>
          <p data-aos="fade-up" className="text-semibold text-lg leading-6 py-4 md:py-0 text-base-content">
            Learn at your own pace with expert-led courses designed to help you <br className="hidden md:block" /> grow, achieve, and succeed.
          </p> 
          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-20 mt-6 items-center justify-center">
            <div className="p-0" data-aos="fade-right"> <img
              className="border-b-8 border-b-cyan-500 w-80 mx-auto"
              src="https://elearning-adbi.org/wp-content/uploads/2025/02/Digital-Public-Infrastructure-DPI-Foundations-Applications-and-Future-Pathways-300x193.png" alt="Album" />
            </div>
            <div className="p-0 md:mt-0 mt-5" data-aos="fade-left">
              <ul className="list-none text-base-content space-y-2 text-left md:px-0 px-6">
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Learn at your own pace with expert-led courses.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Access hundreds of interactive lessons anytime, anywhere.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Track your progress and achieve your learning goals.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Earn certificates to showcase your skills.</li>
                <li className="flex items-center"><ShieldCheck className="mr-2" /> Join a community of learners and share knowledge.</li>
              </ul>

            </div>
          </div>
          <button data-aos="flip-up" class="btn mt-15 uppercase text-lg bg-pink-700 text-white rounded-full h-15  md:w-100 w-full py-4">
            enroll your course now <ArrowRight />
          </button>

        </div>

      </div>

      <div className="w-full bg-blue-950 pt-8 md:pt-2 md:pb-20 pb-12">

        <div data-aos="fade-up" data-aos-duration="1500">
          <CurvedLoop
            marqueeText="Learn ✦ Code ✦ Create ✦ Shine ✦ Explore ✦ Build ✦ Grow ✦ Succeed ✦"
            speed={5}
            curveAmount={250}
            direction="left"
            interactive={true}
            className="text-blue-400 text-shadow-lg"
          />
        </div>
      </div>

      <div className="w-full text-center pt-18 pb-10">
        <div className="stats shadow-lg inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
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

      <div className="w-full text-center py-5">
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
          <div className="w-full text-center border border-2 border-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
            <SpotlightCard
              // color="#7df9ff"
              color="#93C5FD"
              // speed={0}
              // chaos={0.5}
              // thickness={2}
              style={{ borderRadius: 20 }}
              // spotlightColor="rgba(0, 229, 255, 0.2)"
              // spotlightColor="rgba(244, 215, 220, 0.8)"
              spotlightColor="rgba(250, 235, 237,0.8)"
              className="shadow-none custom-spotlight-card bg-secondary border-secondary"
            >
              <div
                // className="shadow-none py-8 px-6 leading-6"
                className="shadow-none p-4 leading-6 text-white"
              >
                <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" className="max-w-full h-auto block mx-auto rounded-lg mb-5" alt="course1" />
                <h3 className="text-xl font-semibold pt-serif">HTML & CSS</h3>
                <p className="opacity-90 mt-2">Beginner • 3 Weeks</p>
                <p className="opacity-90 mt-2">Build responsive web pages and pixel perfect website.</p>
                <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-content rounded-lg transition-all duration-300 ease-in hover:scale-110">
                  <a href=""> Start Learning</a>
                </button>
              </div>
            </SpotlightCard>
          </div>
          <div className="w-full text-center border border-2 border-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
            <SpotlightCard
              color="#93C5FD"
              style={{ borderRadius: 20 }}
              spotlightColor="rgba(250, 235, 237,0.8)"
              className="shadow-none custom-spotlight-card bg-secondary border-secondary"
            >
              <div className="shadow-none p-4 leading-6 text-white">
                <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
                  className="max-w-full h-auto block mx-auto rounded-lg mb-5"
                  alt="JavaScript"
                />
                <h3 className="text-xl font-semibold pt-serif mt-4">JavaScript Essentials</h3>
                <p className="opacity-80 mt-2">Beginner–Intermediate • 4 Weeks</p>
                <p className="opacity-70 mt-2">Master the logic, DOM manipulation, and interactivity.</p>
                <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-content rounded-lg transition-all duration-300 ease-in hover:scale-110">
                  <a href="#">Start Learning</a>
                </button>
              </div>
            </SpotlightCard>
          </div>
          <div className="w-full text-center border border-2 border-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
            <SpotlightCard
              color="#93C5FD"
              style={{ borderRadius: 20 }}
              
              className="shadow-none custom-spotlight-card bg-secondary border-secondary"
            >
              <div className="shadow-none p-4 leading-6 text-white">
                <img src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg"
                  className="max-w-full h-auto block mx-auto rounded-lg mb-5"
                  alt="React"
                />
                <h3 className="text-xl font-semibold pt-serif mt-4">React for Beginners</h3>
                <p className="opacity-80 mt-2">Intermediate • 5 Weeks</p>
                <p className="opacity-70 mt-2">Learn components, hooks, and state management.</p>
                <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-content  rounded-lg transition-all duration-300 ease-in hover:scale-110">
                  <a href="#">Start Learning</a>
                </button>
              </div>
            </SpotlightCard>
          </div>

        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center w-full px-8 mt-5">
          <div className="w-full text-center border border-2 border-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
            <SpotlightCard
              color="#93C5FD"
              style={{ borderRadius: 20 }}
              
              className="shadow-none custom-spotlight-card bg-secondary border-secondary"
            >
              <div className="shadow-none p-4 leading-6 text-white">
                <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  className="max-w-full h-auto block mx-auto rounded-lg mb-5"
                  alt="Tailwind CSS"
                />
                <h3 className="text-xl font-semibold pt-serif mt-4">Tailwind CSS Mastery</h3>
                <p className="opacity-80 mt-2">Intermediate • 2 Weeks</p>
                <p className="opacity-70 mt-2">Create modern, responsive UIs faster with Tailwind.</p>
                <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-content rounded-lg transition-all duration-300 ease-in hover:scale-110">
                  <a href="#">Start Learning</a>
                </button>
              </div>
            </SpotlightCard>
          </div>
          <div className="w-full text-center border border-2 border-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
            <SpotlightCard
              color="#93C5FD"
              style={{ borderRadius: 20 }}
              
              className="shadow-none custom-spotlight-card bg-secondary border-secondary"
            >
              <div className="shadow-none p-4 leading-6 text-white">
                <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
                  className="max-w-full h-auto block mx-auto rounded-lg mb-5"
                  alt="Python"
                />
                <h3 className="text-xl font-semibold pt-serif mt-4">Python For Beginners</h3>
                <p className="opacity-80 mt-2">Beginner • 3 Weeks</p>
                <p className="opacity-70 mt-2">Understand design principles, wireframes & prototyping.</p>
                <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-content rounded-lg transition-all duration-300 ease-in hover:scale-110">
                  <a href="#">Start Learning</a>
                </button>
              </div>
            </SpotlightCard>
          </div>
          <div className="w-full text-center border border-2 border-secondary p-1.5 mt-5" style={{ borderRadius: 20 }}>
            <SpotlightCard
              color="#93C5FD"
              style={{ borderRadius: 20 }}
              
              className="shadow-none custom-spotlight-card bg-secondary border-secondary"
            >
              <div className="shadow-none p-4 leading-6 text-white">
                <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  className="max-w-full h-auto block mx-auto rounded-lg mb-5"
                  alt="Full Stack"
                />
                <h3 className="text-xl font-semibold pt-serif mt-4">Full Stack Development</h3>
                <p className="opacity-80 mt-2">Advanced • 8 Weeks</p>
                <p className="opacity-70 mt-2">Frontend + Backend skills to build complete apps.</p>
                <button className="mt-4 px-4 py-2 cursor-pointer bg-base-300 text-base-content rounded-lg transition-all duration-300 ease-in hover:scale-110">
                  <a href="#">Start Learning</a>
                </button>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto my-20 px-6">
        <div>
          <h4 data-aos="fade-up" className="text-3xl text-center text-base-content font-semibold"> Upgrade Your Career with In-Demand Top Tech Skills</h4>
          <div className="text-3xl text-center pt-3 pb-10 text-gray opacity-80 font-normal text-[18px]">new opportunities with continuous learning</div>
        </div>
        <div className="w-[300px] md:w-3xl lg:w-7xl mx-auto mt-8 pb-5">
          <LogoLoop
            logos={techLogos}
            speed={80}
            logoHeight={48}
            gap={40}
            direction="left"
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="oklch(var(--b1))" // DaisyUI background token
          />
        </div>



      </div>


      <div className=" w-full text-center pb-20 px-8">
        <h4 data-aos="fade-up" className="text-3xl text-center text-base-content font-semibold py-4">
          Why Choose us ?
        </h4>

        {/* https://images.pexels.com/photos/8637914/pexels-photo-8637914.jpeg */}

        <div className="flex h-screen items-center justify-center">
          {/* <div className="md:w-1/2 w-full">
            <img src="https://images.pexels.com/photos/8637914/pexels-photo-8637914.jpeg" className="w-[300px] h-auto mx-auto block" />
          </div> */}
          <div className="md:w-full lg:w-3/4 sm:w-full w-full md:h-[500px] h-[800px]">
            <ScrollStack>
              {/* Benefit 1: Placements */}
              <ScrollStackItem itemClassName="bg-pink-500 text-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Briefcase className="w-30 h-30" />
                  {/* <img
          src="https://img.icons8.com/color/96/job.png"
          alt="Placement"
          className="w-24 h-24"
        /> */}
                  <h2 className="text-5xl font-extrabold pompiere">MNC & IIT Placements</h2>
                  <p className="text-lg opacity-90">
                    Get opportunities to connect with top companies, IITs and NITs for placements.
                  </p>
                </div>
              </ScrollStackItem>

              {/* Benefit 2: Vision */}
              <ScrollStackItem itemClassName="bg-purple-500 text-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Eye className="w-30 h-30" />
                  {/* <img
          src="https://img.icons8.com/color/96/vision.png"
          alt="Vision"
          className="w-24 h-24"
        /> */}
                  <h2 className="text-5xl font-extrabold pompiere">Expand Your Vision</h2>
                  <p className="text-lg opacity-90">
                    Explore new domains, learn future-ready skills, and grow beyond limits.
                  </p>
                </div>
              </ScrollStackItem>

              {/* Benefit 3: Professors */}
              <ScrollStackItem itemClassName="bg-blue-500 text-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <GraduationCap className="w-30 h-30" />
                  {/* <img
          src="https://img.icons8.com/color/96/professor.png"
          alt="Professors"
          className="w-24 h-24"
        /> */}
                  <h2 className="text-5xl font-extrabold pompiere">Learn from Experts</h2>
                  <p className="text-lg opacity-90">
                    Get direct access to lessons from top IIT and NIT professors.
                  </p>
                </div>
              </ScrollStackItem>

              {/* Benefit 4: Certificate */}
              <ScrollStackItem itemClassName="bg-green-500 text-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Award className="w-30 h-30" />
                  {/* <img
          src="https://img.icons8.com/color/96/diploma.png"
          alt="Certificate"
          className="w-24 h-24"
        /> */}
                  <h2 className="text-5xl font-extrabold pompiere">Earn a Certificate</h2>
                  <p className="text-lg opacity-90">
                    On completion, receive an official certificate to showcase your skills.
                  </p>
                </div>
              </ScrollStackItem>

              {/* Benefit 5: Join Us */}
              <ScrollStackItem itemClassName="bg-yellow-500 text-black rounded-2xl shadow-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Users className="w-30 h-30" />
                  {/* <img
          src="https://img.icons8.com/color/96/add-user-group-man-man.png"
          alt="Join Us"
          className="w-24 h-24"
        /> */}
                  <h2 className="text-5xl font-extrabold pompiere">Join Us Now</h2>
                  <p className="text-lg opacity-90">
                    Start your journey today and unlock limitless opportunities with us.
                  </p>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>


      </div>

      <div className="w-full pb-15 md:px-0 px-5">
        <div className="md:w-1/2 w-full d-flex items-center justify-center mx-auto">
          <h4 data-aos="fade-up" className="text-3xl text-center font-semibold py-4 mb-10">
            Frequency Asked Question
          </h4>

          {/* <div className="collapse collapse-arrow shadow-sm shadow-blue-300 mt-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">How do I enroll in a course?</div>
            <div className="collapse-content text-sm text-white">
              Browse our course catalog, click on the course you like, and then click the "Enroll Now" button to start learning.
            </div>
          </div>

          <div className="collapse collapse-arrow shadow-sm shadow-blue-300 mt-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Will I get a certificate after completing a course?</div>
            <div className="collapse-content text-sm text-white">
              Yes, you will receive a digital certificate after successfully completing all modules and passing the final quiz of the course.
            </div>
          </div>

          <div className="collapse collapse-arrow shadow-sm shadow-blue-300 mt-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Can I access the courses anytime?</div>
            <div className="collapse-content text-sm text-white">
              Absolutely! All our courses are self-paced and available 24/7. You can learn anytime, from any device.
            </div>
          </div>

          <div className="collapse collapse-arrow shadow-sm shadow-blue-300 mt-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">What if I have doubts during learning?</div>
            <div className="collapse-content text-sm text-white">
              Each course has a dedicated Q&A section where you can ask questions. Our mentors and community will help you resolve them quickly.
            </div>
          </div> */}
          <Accordion
            className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <AccordionItem value='getting-started' className='py-2 mt-6'>
              <AccordionTrigger className='w-full text-left'>
                <div className='flex items-center justify-between'>
                  <div>How do I enroll in a course?</div>
                  <ChevronUp className='h-4 w-4  transition-transform duration-200 group-data-expanded:-rotate-180 ' />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-base-content/80'>
                  Browse our course catalog, click on the course you like, and then click the "Enroll Now" button to start learning.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='animation-properties' className='py-2'>
              <AccordionTrigger className='w-full text-left  '>
                <div className='flex items-center justify-between'>
                  <div>Will I get a certificate after completing a course?</div>
                  <ChevronUp className='h-4 w-4  transition-transform duration-200 group-data-expanded:-rotate-180 ' />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className=''>
                  Yes, you will receive a digital certificate after successfully completing all modules and passing the final quiz of the course.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='advanced-usage' className='py-2'>
              <AccordionTrigger className='w-full text-left  '>
                <div className='flex items-center justify-between'>
                  <div>Can I access the courses anytime?</div>
                  <ChevronUp className='h-4 w-4  transition-transform duration-200 group-data-expanded:-rotate-180 ' />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className=''>
                  Absolutely! All our courses are self-paced and available 24/7. You can learn anytime, from any device.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='community-and-support' className='py-2 mb-6'>
              <AccordionTrigger className='w-full text-left  '>
                <div className='flex items-center justify-between'>
                  <div>What if I have doubts during learning?</div>
                  <ChevronUp className='h-4 w-4  transition-transform duration-200 group-data-expanded:-rotate-180 ' />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className=''>
                  Each course has a dedicated Q&A section where you can ask questions. Our mentors and community will help you resolve them quickly.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>



      {/* <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer> */}

    </>
  );
}

export default Home;