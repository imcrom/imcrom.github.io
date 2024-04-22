"use client";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowButton from "../pages/blog-details/ArrowButton";

export const navbarData = [
  {
    id: "menu1",
    menuTitle: "Home",
    path: "/",
  },
  {
    id: "about-page",
    menuTitle: "Trending",
    path: "/trending",
  },
  {
    id: "menu2",
    menuTitle: "Twitter",
    path: "https://twitter.com/socialbetsorg",
  },
  {
    id: "menu2",
    menuTitle: "Telegram",
    path: "https://t.me/socialbetsorg",
  },
  {
    id: "menu2",
    menuTitle: "Docs",
    path: "https://docs.socialbets.org/",
  },

  {
    id: "menu4",
    menuTitle: "Our Token",
    path: "#",
    menuItems: [
      {
        id: "Etherscan",
        title: "Etherscan",
        menuItemPath: "#",
      },
      {
        id: "Dextools",
        title: "Telegram",
        menuItemPath: "#",
      },
      {
        id: "Uniswap",
        title: "Uniswap",
        menuItemPath: "#",
      },
    ],
  },

];

const DesktopNavbar = () => {
  const pathName = usePathname();
  return (
    <div className="desktop-navbar-container">
      <div>
        <Link href={`/`} className="logo-main">
          Social<span>BETS</span>
        </Link>
      </div>
      <ul className="desktop-menu-items" id="primary">
        {navbarData.map(({ id, menuTitle, path, menuItems }) => {
          let isActive = menuItems?.some(
            (path) => pathName == path.menuItemPath
          );
          return menuItems ? (
            <li
              key={`${id}`}
              className={` position-relative menu-item-with-dropdown`}
            >
              <p
                className={`d-flex gap-1 align-items-center justify-content-between navbar-hover-text ${
                  isActive && "text-secondary"
                }`}
              >
                {" "}
                <span
                  className={` textL font-medium  ${
                    isActive ? "text-secondary" : "menu-item-text-white"
                  }`}
                >
                  {menuTitle}
                </span>
                <IconChevronDown stroke="3" className={`menu-arrow-icon`} />
              </p>

              <ul className="list-unstyled main-menu-dropdown">
                {menuItems.map(({ id, title, menuItemPath }) => (
                  <li key={id} className={``}>
                    <Link
                      href={`${menuItemPath}`}
                      className={`textL desktop-menu-item desktop-menu-dropdown-item menu-item-text-white  ${
                        pathName === menuItemPath && "menu-active"
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={id} className={`menu-item `}>
              <Link
                href={`${path}`}
                className={`textL font-medium navbar-hover-text  ${
                  pathName === path ? "text-secondary" : "menu-item-text-white"
                }`}
              >
                {" "}
                {menuTitle}
              </Link>
            </li>
          );
        })}
      </ul>
      <ArrowButton link="#" />
    </div>
  );
};

export default DesktopNavbar;
