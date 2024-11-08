import { FC, ReactNode } from "react";
import { appleImg } from "../utils";
import { NavItem } from "../types/NavItem";

const Navbar: FC = (): ReactNode => {
  const navItems: Array<NavItem> = [
    {
       title: "Phones",
       link: "#",
    },
    {
       title: "Macbooks",
       link: "#",
    },
    {
       title: "Tablets",
       link: "#",
    },
 ];

 
   return (
      <header>
         <nav>
            <img src={appleImg} alt="Apple" />
            {navItems.map((navItem: NavItem, index) => (
               <div key={index}>{navItem.title}</div>
            ))}
         </nav>
         Navbar
      </header>
   );
};

export default Navbar;
