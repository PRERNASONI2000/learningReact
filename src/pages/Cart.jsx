import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DarkVeil  from "../components/DarkVeil";


const Cart = () => {
  const cartRef = useRef(null);

  useGSAP(() => {
    const element = cartRef.current;

    // GSAP hover animation
    const hoverAnimation = gsap.to(element, {
      scale: 1.05,
      rotation: 3,
      duration: 0.3,
      paused: true, // start paused
      ease: "power1.inOut",
    });

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
   <>
   <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DarkVeil />
</div>
    <div
      ref={cartRef}
      className="p-6 rounded-2xl shadow-lg bg-white cursor-pointer"
    >
      <h2 className="text-xl font-bold">Acernity UI</h2>
      <p className="text-gray-600">Mozdern Animated Components</p>
      <div className="notification-card">
  📢 New course uploaded: React Basics!
</div>

<button className="btn-gradient">
  View Notification
</button>
    </div>
   </>
  );
};

export default Cart;
