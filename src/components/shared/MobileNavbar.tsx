"use client";
import {
  DocumentText1,
  Chart1,
  Verify,
  Send,
  Home2,
} from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import AnimateHeight from "react-animate-height";

const navbarData = [
  {
    id: "menu1",
    icon: <Home2 />,
    menuTitle: "Home",
    path: "/",
  },
  {
    id: "menu2",
    menuTitle: "Trending",
    icon: <Chart1 />,
    path: "/trending",
    
  },
  {
    id: "menu2",
    menuTitle: "Docs",
    icon: <DocumentText1 />,
    path: "https://docs.socialbets.org/",
    
  },
  {
    id: "project",
    menuTitle: "Twitter",
    icon: <Verify />,
    path: "https://twitter.com/socialbetsorg",
  },
  {
    id: "services-section",
    menuTitle: "Services",
    icon: <Send />,
    path: "https://t.me/socialbetsorg",
  },


];

type Props = {
  sidebarToggle: boolean;
  handleToggle: () => void;
  setSidebarToggle: Dispatch<SetStateAction<boolean>>;
};
const MobileNavbar = ({
  sidebarToggle,
  handleToggle,
  setSidebarToggle,
}: Props) => {
  const [dropDown, setDropDown] = useState("");

  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  const pathName = usePathname();

  return (
    <div className="">
      <div
        className={`mobile-sidebar-overlay ${
          sidebarToggle
            ? "mobile-sidebar-overlay-show"
            : "mobile-sidebar-overlay-hide"
        }`}
        onClick={handleToggle}
      ></div>
      <div
        className={`mobile-sidebar-containe ${
          sidebarToggle ? "mobile-sidebar-show" : "mobile-sidebar-hide"
        }`}
      >
        <Link href={`/`} className="d-block logo-main-mobile">
          Social<span>BETS</span>
        </Link>

        <div className="sidebar-menu-container">
          <ul className="mobile-sidebar-menus">
            {navbarData.map(({ id, menuTitle, path, icon }) => {
               
              return (
                <li
                  key={id}
                  className={`mobile-menu-item  ${
                    pathName === path && "text-secondary"
                  }`}
                >
                  <Link
                    onClick={() => setSidebarToggle(false)}
                    href={`${path}`}
                    className="d-flex align-items-center justify-content-between mobile-single-menu"
                  >
                    {" "}
                    <span className="textXL mobile-menu-link">
                      {icon} <span>{menuTitle}</span>{" "}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
