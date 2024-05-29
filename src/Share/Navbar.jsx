import { NavLink } from "react-router-dom";
import logo from '../../src/assets/logo.png'
import Button from "../Hooks/Button";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/' className={({ isActive }) =>
            isActive
              ? "text-[#F63E7B] rounded-xl p-3 border-b-2 border-[#F63E7B]"
              : "text-[#474747]"
          }>Home</NavLink>
      </li>
      <li>
        <NavLink to='/portfolio' className={({ isActive }) =>
            isActive
              ? "text-[#F63E7B] rounded-xl p-3 border-b-2 border-[#F63E7B] "
              : "text-[#474747]"
          }>Our Portfolio</NavLink>
      </li>
      <li > 
        <NavLink to='/team' className={({ isActive }) =>
            isActive
              ? "text-[#F63E7B] rounded-xl p-3 border-b-2 border-[#F63E7B]"
              : "text-[#474747]"
          }>Our Team</NavLink>
      </li>
      <li >
        <NavLink to='/contact' className={({ isActive }) =>
            isActive
              ? "text-[#F63E7B] rounded-xl p-3 border-b-2 border-[#F63E7B]"
              : "text-[#474747]"
          }>Contact Us</NavLink>
      </li>
      <li >
        <NavLink to='/dashboard' className={({ isActive }) =>
            isActive
              ? "text-[#F63E7B] rounded-xl p-3 border-b-2 border-[#F63E7B]"
              : "text-[#474747]"
          }>DashBoard</NavLink>
      </li>
    </>
  );
  return (
    <div>
        <div className="navbar fixed z-10 container mt-5 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 space-y-4 gap-5 rounded-box w-52"
          >
           {navLinks}
          </ul>
        </div>
        <div>
            <img src={logo} className="h-10" alt="Jerin's Parlour" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-6 px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Button label={'Login'}></Button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
