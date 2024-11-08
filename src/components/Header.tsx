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
      <header className="header container">
         <i className="icon-apple header__icon header__apple"></i>
         <nav className={`header__nav ${navIsActive && "header__nav--active"}`}>
            {navItems.map((navItem: NavItem, index) => (
               <div className="header__navItem" key={index}>{navItem.title}</div>
            ))}
         </nav>
         <i className="icon-search header__icon"></i>
         <img src={bagImg} alt="bag" className="header__icon-img" />
         <MenuBtn onClick={openMobileMenu} isActive={navIsActive} />
      </header>
   );
};

export default Navbar;
