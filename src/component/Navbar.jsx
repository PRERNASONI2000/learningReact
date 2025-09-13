import React, { useContext } from "react";
import { 
  Sun, 
  Moon, 
  LogIn, 
  UserPlus,
  MoreVertical 
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="px-4 py-1 flex justify-end items-center 
    bg-gray-800 text-white border-b border-base-content/10 fixed w-full h-14 z-40">
      {/* <h1 className="text-lg font-bold">Dashboard</h1> */}
      <div className="flex items-center">
        {/* <Link to="/login">
         <button
        className="btn btn-ghost btn-circle">
        <LogIn size={20} />
      </button>
      </Link> */}
      
        <button
        onClick={toggleTheme}
        className="btn btn-ghost btn-circle">
        {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
       <ul className="menu menu-horizontal flex">
      <li>
        <details>
          <summary>More</summary>
          <ul className="bg-gray-800 rounded-t-none">
            <li><Link to="/profile" className="whitespace-nowrap">Profile</Link></li>
            <li><Link to="/login" className="whitespace-nowrap">Log Out</Link></li>
          </ul>
        </details>
      </li>
    </ul>
      </div>
    </header>
    

  );
}

export default Navbar;