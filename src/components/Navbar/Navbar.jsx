import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { NavLink } from "react-router";
const Navbar = () => {
    const navlink = 
    <>
        <NavLink to="/" className={ ({isActive}) => isActive ? "underline underline-offset-4 decoration-2 decoration-[#632EE3] pr-5" : "text-black pr-5"}>Home</NavLink>
        <NavLink to="apps" className={ ({isActive}) => isActive ? "underline underline-offset-4 decoration-2 decoration-[#632EE3] pr-5" : "text-black pr-5"}>Apps</NavLink>
        <NavLink to="installedApp" className={ ({isActive}) => isActive ? "underline underline-offset-4 decoration-2 decoration-[#632EE3] pr-5" : "text-black pr-5"}>My Installed</NavLink>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-20">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlink}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg font-bold bg-[linear-gradient(112deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] bg-clip-text text-transparent font-inter"><img className="h-[40px]" src={logo} alt="logo"/>
            HERO.IO</a>
      </div>
      <div className="navbar-center hidden lg:flex font-inter font-semibold textarea-m bg-[linear-gradient(112deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">
        <ul className="menu menu-horizontal px-1">
            {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-[#632EE3] bg-[linear-gradient(112deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)]"><FaGithub></FaGithub> Contribution</a>
      </div>
    </div>
  );
};
export default Navbar;
