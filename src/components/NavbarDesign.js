import React from "react";
import "./NavbarDesign.css";
import logo from "../images/logo.png";
import profile from "../images/profile.jpg";

export const NavbarDesign = () => {
  return (
    <div className="container-fluid navbarDesign">
      <div className="row navbarRow">
        <div className="col-1 hamburger">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="col-1 logo1">
          <img src={logo} />
        </div>
        <div className="col-5 navInput">
          <input type="text" placeholder="Search" />
        </div>
        <div className="col-1 reload">
          <ion-icon name="reload-outline"></ion-icon>
        </div>
        <div className="col-1 stack">
          <ion-icon name="file-tray-stacked-outline"></ion-icon>
        </div>
        <div className="col-1 setting">
          <ion-icon name="settings-outline"></ion-icon>
        </div>
        <div className="col-1 appOut">
          <ion-icon name="apps-outline"></ion-icon>
        </div>
        <div className="col-1 profile">
          <img src={profile} />
        </div>
        <br />
        <br />
        <hr />
      </div>
    </div>
  );
};
