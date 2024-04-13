import { useState } from "react";
import { greetingByTime } from "../utils/greeting-by-time";
import { Menu } from "./menu";
import menuCloseSvg from "../assets/svg/menu/close_white_36dp.svg";
import menuSvg from "../assets/svg/menu/menu_white_36dp.svg";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuIcon = showMenu ? menuCloseSvg : menuSvg;

  return (
    <header>
      <div>
        <p>{greetingByTime()}, </p>
      </div>
      <img src={menuIcon} onClick={() => setShowMenu(!showMenu)}></img>
      <Menu />
    </header>
  );
}
