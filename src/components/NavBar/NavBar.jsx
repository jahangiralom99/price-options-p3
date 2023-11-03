import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];


  return (
    <nav className="p-6 md:p-0 bg-pink-100">
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen === true ? (
          <AiOutlineClose className="text-3xl"></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="text-3xl"></AiOutlineMenu>
        )}
      </div>
      <ul className={`md:flex duration-1000 absolute bg-pink-200 ${isOpen ? 'top-14' : '-top-72'} md:static shadow-lg `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
