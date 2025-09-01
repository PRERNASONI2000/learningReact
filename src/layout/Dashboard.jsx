import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Dashboard = ({children}) => {
  return(
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen md:ml-64">
            <Navbar />
            <main className="flex-1 p-0 bg-base-200 text-base-content flex justify-center items-center"> {children} </main>
            <Footer />
         </div>   
    </div>
  )
}

export default  Dashboard ;