import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CircularText from "../../Reactbits/CircularText/CircularText";

const Dashboard = ({ children }) => {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => setShowHelp(!showHelp);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar />
        {/* Button to toggle help box */}
        <button
          className="fixed bottom-15 right-5 z-50"
          onClick={toggleHelp}
        >
          <CircularText
            // text="REACT*BITS*COMPONENTS*"
            text="feelfreetocontact"
            onHover="speedUp"
            spinDuration={20}
            className="text-green-500 font-extrabold uppercase" 
          />
        </button>
        <main className="flex-1 p-0 bg-base-200 text-base-content overflow-hidden mt-14"> {children} </main>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard;
