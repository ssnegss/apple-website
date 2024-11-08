import { FC, ReactNode, useState } from "react";
import { bagImg } from "../utils";
import { NavItem } from "../types/NavItem";
import MenuBtn from "./ui/MenuBtn";

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

   const [navIsActive, setNavActive] = useState<boolean>(false);

   const openMobileMenu = () => {
      setNavActive(!navIsActive);
   };

   return (
      <header className="header">
         <i className="icon-apple"></i>
         <nav className={`header__nav ${navIsActive && "header__nav--active"}`}>
            {navItems.map((navItem: NavItem, index) => (
               <div key={index}>{navItem.title}</div>
            ))}
         </nav>
         <i className="icon-search"></i>
         <img src={bagImg} alt="bag" />
         <MenuBtn onClick={openMobileMenu} isActive={navIsActive} />
      </header>
   );
};

export default Navbar;
