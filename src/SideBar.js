import React from "react";
import classes from "./SideBar.module.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SideBarOption from "./SideBarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SideBar(props) {
  return (
    <div className={classes.SideBar}>
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className={classes.SideBar__compose}
      >
        Compose
      </Button>

      <SideBarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SideBarOption Icon={StarIcon} title="Starred" number={54} />
      <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SideBarOption Icon={LabelImportantIcon} title="Impotant" number={54} />
      <SideBarOption Icon={NearMeIcon} title="Send" number={54} />
      <SideBarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SideBarOption Icon={ExpandMoreIcon} title="More" number={54} />
    </div>
  );
}

export default SideBar;
