import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Menu,
  X,
  LogInIcon,
  Bell,
  Settings,
  User,
  LayoutGrid,
  HelpCircle,
  LogIn,
  UserPlus
} from "lucide-react";

const sidebarItems = [
  { title: "Home", icon: <Home size={20} />, path: "/" },
  { title: "Courses", icon: <LogInIcon size={20} />, path: "/courses" },
  { title: "Notification", icon: <Bell size={20} />, path: "/notification" },
  { title: "Profile", icon: <User size={20} />, path: "/profile" },
  { title: "Resources", icon: <LayoutGrid size={20} />, path: "/resources" },
  { title: "Setting", icon: <Settings size={20} />, path: "/settings" },
  { title: "Support", icon: <HelpCircle size={20} />, path: "/support" },
  { title: "Login", icon: <LogIn size={20} />, path: "/login" },
  { title: "SignUp", icon: <UserPlus size={20} />, path: "/signup" },
  { title: "Contact", icon: <HelpCircle size={20} />, path: "/contact" },
  { title: "Cart", icon: <HelpCircle size={20} />, path: "/cart" },
];
 
const Sidebar = () => {
  const[isOpen, setIsOpen] = useState(false);
  return (
   <>
    {/* Mobile toggle button */}
      <button
        className=" fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={20} />
      </button>
    <aside className={`w-64 h-full bg-gray-900 text-white top-0 left-0 z-50 transform transition-transform duration-300 fixed ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
     <div className="flex items-center justify-evenly border-gray-300/50 px-4 py-3 pb-4 border-b mb-6">
       <h2 className="text-xl font-bold">
        My Dashboard
      </h2>
      
      <X size={20} className="cursor-pointer" onClick={() => setIsOpen(false)} />
     </div>

      <ul className="flex flex-col  max-h-screen gap-1 p-4  overflow-y-auto">
        {sidebarItems.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path} // ✅ Corrected path
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-2 px-3 flex items-center gap-3 rounded-md transition ${
                  isActive
                    ? "bg-gray-700 text-blue-400"
                    : "hover:bg-gray-800 text-gray-300"
                }`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
    {isOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={() => setIsOpen(false)}
  ></div>
)}
   </>
  );
};

export default Sidebar;
