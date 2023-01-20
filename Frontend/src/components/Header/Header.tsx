import React from "react";
import "./Header.css";

import { useState } from "react";

import BatteryPopup from "../BatteryPopup/BatteryPopup";

import WaterPopup from "../WaterPopup/WaterPopup";
import AboutUsPopup from "../AboutUsPopup/AboutUsPopup";
import Logo from "../../assets/logo.png";
import LoginPopup from "../LoginPopup/LoginPopup";

function Header() {
  const [isBatteryPopup, setBatteryPopup] = useState(false);
  const [isWaterPopup, setWaterPopup] = useState(false);
  const [isAboutUsPopup, setAboutUsPopup] = useState(false);
  const [isSideBar, setSideBar] = useState(false);
  const [isLoginPopup, setLoginPopup] = useState(false);
  const closePopup = () => {
    setBatteryPopup(false);
    setLoginPopup(false);
    setWaterPopup(false);
    setAboutUsPopup(false);
    setSideBar(true);
  };

  const openBatteryPopup = () => {
    setBatteryPopup(true);
    setSideBar(false);
  };
  const openWaterPopup = () => {
    setWaterPopup(true);
    setSideBar(false);
  };

  const openAboutUsPopup = () => {
    setAboutUsPopup(true);
    setSideBar(false);
  };

  return (
    <>
      {isBatteryPopup ? <BatteryPopup closePopup={() => closePopup()} /> : null}

      {isWaterPopup ? <WaterPopup closePopup={() => closePopup()} /> : null}
      {isAboutUsPopup ? <AboutUsPopup closePopup={() => closePopup()} /> : null}
      {/* {isBatteryPopup || isContactUsPopup || isAboutUsPopup || isWaterPopup
        ? setSideBar(false)
        : null} */}
      {isLoginPopup ? <LoginPopup closePopup={() => closePopup()} /> : null}

      <input
        type="checkbox"
        className="openSidebarMenu"
        id="openSidebarMenu"
        onClick={() => setSideBar(true)}
      />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>

      {isSideBar ? (
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
            <li onClick={openBatteryPopup} className="menu-item">
              Battery Types
            </li>

            <li onClick={openWaterPopup} className="menu-item">
              Distilled Water
            </li>
            <li onClick={openAboutUsPopup} className="menu-item">
              About Us
            </li>
          </ul>
        </div>
      ) : null}

      <div>
        {/* <a
          target="_blank"
          rel="noreferrer"
          // href="https://instagram.com/battery_outfitters_lb?igshid=ZmRlMzRkMDU="
        > */}
        <img
          className="image"
          src={Logo}
          alt="logo"
          onClick={() => setLoginPopup(true)}
        ></img>
      </div>
    </>
  );
}

export default Header;
