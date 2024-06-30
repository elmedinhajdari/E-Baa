import React, { ReactNode } from "react";
import "./navbar.scss";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { iconNavItems, navItems } from "../data/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Navbar = () => {
  const getContent = (item: any, index: number): ReactNode => {
    const Component = item.icon;
    return (
      <li className="gray-background second-container-options" key={index}>
        <Component />
        {item.text}
      </li>
    );
  };

  return (
    <>
      <div className="nav-style">
        {/* First Container */}
        <div className="gray-background d-flex justify-content-between first-container nav-font">
          <span className="nav-bold">We are the best!</span>
          <div className="d-flex gap-4">
            <span>Language</span>
            <span>Help line 0800-33333</span>
          </div>
        </div>
        {/* Second Container */}
        <div className="second-container">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <a className="navbar-brand" href="#home">
                <img
                  src="https://www.e-baa.com/new/public/uploads/all/ytEkwT2zPwyfu10RDqHwNDLgZ9YFrfe9lC8h55jt.png"
                  alt="Brand Logo"
                  className="nav-logo-size"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <div className="d-flex">
                <TextField
                  id="outlined-basic"
                  label="Search..."
                  size="medium"
                  variant="outlined"
                  fullWidth
                />
                <Button className="" variant="contained">
                  <SearchIcon />
                </Button>
              </div>
            </div>

            <div className="col-auto nav-font">
              <ul className="navbar-nav d-flex flex-row gap-3 icon-gap">
                {iconNavItems.map((item, index) => getContent(item, index))}
              </ul>
            </div>
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
