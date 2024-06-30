import React from "react";
import "./navbar.scss";
import { Button, TextField } from "@mui/material";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const iconNavItems = [
    { icon: <AutorenewOutlinedIcon />, text: "Compare Products" },
    { icon: <FavoriteBorderIcon />, text: "Wish List" },
    { icon: <PeopleAltOutlinedIcon />, text: "Login | Register" },
    { icon: <ShoppingCartOutlinedIcon />, text: "Cart" },
  ];

  const navItems = [
    { href: "#", text: "Kategoritë" },
    { href: "#te-rejat", text: "Të Rejat" },
    { href: "#elektronike", text: "Elektronikë" },
    { href: "#kopsht", text: "Kopsht" },
    { href: "#artikuj-kuzhine", text: "Artikuj për Kuzhinë & Tryezë" },
    { href: "#artikuj-shtepi", text: "Artikuj për Shtëpi & Dekorime" },
    { href: "#artikuj-banjo", text: "Artikuj për Banjo" },
    { href: "#dhoma-dite-fjetje", text: "Dhomë Dite & Fjetje" },
    { href: "#lodra", text: "Lodra" },
    { href: "#ushqimore", text: "Ushqimore" },
    { href: "#pishina-goma-aksesore", text: "Pishina & Goma & Aksesorë" },
    { href: "#higjiene", text: "Higjienë" },
    { href: "#valixhe-canta-ombrella", text: "Valixhe & Çanta & Ombrella" },
    { href: "#kozmetike", text: "Kozmetikë" },
  ];

  return (
    <>
      <div className="nav-style d-flex flex-column nav-fix">
        {/* First Container */}
        <div className="gray-background d-flex justify-content-between first-container nav-font">
          <span className="nav-bold">We are the best!</span>
          <div className="d-flex gap-4">
            <span>Language</span>
            <span>Help line 0800-33333</span>
          </div>
        </div>
        {/* Second Container */}
        <div className="d-flex align-items-center second-container justify-content-between">
          <a className="navbar-brand" href="#home">
            <img
              src="https://www.e-baa.com/new/public/uploads/all/ytEkwT2zPwyfu10RDqHwNDLgZ9YFrfe9lC8h55jt.png"
              alt="Brand Logo"
              className="nav-logo-size"
            />
          </a>
          <div className="d-flex">
            <div className="search-bar">
              <TextField
                id="outlined-basic"
                label="Search..."
                size="medium"
                variant="outlined"
                fullWidth
              />
            </div>
            <Button variant="contained">
              <SearchIcon />
            </Button>
          </div>
          <div className="nav-font">
            <ul className="navbar-nav d-flex flex-row gap-3 icon-gap">
              {iconNavItems.map((item, index) => (
                <li
                  className="gray-background second-container-options"
                  key={index}
                >
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Third Container */}
        <div className="blue-color third-container nav-font nav-bold">
          <ul className="navbar-nav d-flex flex-row third-category">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
