import React from "react";
import classes from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ArrowDropDown } from "@material-ui/icons";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header(props) {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png"
          alt="logo"
        />
      </div>
      <div className={classes.Header__middle}>
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className={classes.Header__inputCaret} />
      </div>
      <div className={classes.Header__right}>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
