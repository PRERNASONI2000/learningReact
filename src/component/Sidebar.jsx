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
  ShoppingCart,
  LogIn,
  UserPlus,
  Phone,
  HeartPlus,
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
  { title: "Contact", icon: <Phone size={20} />, path: "/contact" },
  { title: "Cart", icon: <ShoppingCart size={20} />, path: "/cart" },
  { title: "FigmaToReact", icon: <HeartPlus size={20} />, 
     submenu: [
      { title: "iMail" , path: "/design/imail"},
     ] },
];

// 
 
const Sidebar = () => {
  const[isOpen, setIsOpen] = useState(false);
  return (
   <>
    {/* Mobile toggle button */}
      <button
        className="fixed top-2.5 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >  
        <Menu size={20} />
      </button>
    <aside className={`w-64 h-full bg-gray-900 text-white top-0 left-0 z-50 transform transition-transform duration-300 fixed ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
     <div className="flex items-center justify-evenly border-gray-300/50 py-3 pb-4 border-b mb-6">
       <h2 className="text-xl font-bold">
        My Dashboard
      </h2>
      
      <X size={20} className="cursor-pointer" onClick={() => setIsOpen(false)} />
     </div>

      <ul className="flex flex-col max-h-screen gap-1 p-4  overflow-y-auto h-[400px]">
        {sidebarItems.map((item) => (
          <li key={item.title}>
              {item.submenu ? (
        <div tabIndex={0} className="dropdown">
          <button className="py-2 px-3 flex items-center gap-3 rounded-md w-full text-left hover:bg-gray-800 text-gray-300">
            {item.icon}
            <span>{item.title}</span>
            <svg className="ml-auto w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul className="dropdown-content menu p-2 shadow bg-gray-900 rounded-box w-full mt-1">
            {item.submenu.map((sub) => (
              <li key={sub.title}>
                <NavLink
                  to={sub.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md transition ${
                      isActive
                        ? "bg-gray-700 text-blue-400"
                        : "hover:bg-gray-800 text-gray-300"
                    }`
                  }
                >
                  {sub.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
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
            </NavLink> )}
          </li>
        ))}
      </ul>
    </aside>
    {isOpen && (
  <div
    className="fixed inset-0 bg-black/20 z-40"
    onClick={() => setIsOpen(false)}
  ></div>
)}
   </>
  );
};

export default Sidebar;
