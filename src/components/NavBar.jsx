import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
   <div className="navbar">
  <div className="navbar-start">
    <div className="flex items-center gap-1 font-bold text-xl"><img className="w-10" src="/logo.png"/> Ai Hub</div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
      <li><a>Home</a></li>
       <li><a>About</a></li>
       <li><a>Services</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn btn-circle  text-red-500"><ShoppingCart size={20}/></a>
    <a className="btn bg-red-500 rounded-full text-white">Get Started</a>
  </div>
</div>
  );
};

export default NavBar;
