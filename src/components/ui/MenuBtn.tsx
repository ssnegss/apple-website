import { FC, ReactNode } from "react";
import { MenuBtnProps } from "../../types/MenuBtnProps";

const MenuBtn: FC<MenuBtnProps> = ({
   onClick,
   isActive,
}: MenuBtnProps): ReactNode => {
   return (
      <button
         className={`menuBtn ${isActive ? "menuBtn--active" : ""}`}
         onClick={onClick}
      >
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
};

export default MenuBtn;
