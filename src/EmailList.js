import React, { useState, useEffect } from "react";

import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RedoIcon from "@material-ui/icons/Redo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Checkbox, IconButton } from "@material-ui/core";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="EmailList">
      <div className="EmailList__settings">
        <div className="EmailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="EmailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="EmailList__sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleIcon} title="primary" color="blue" />
        <Section Icon={LocalOfferIcon} title="primary" color="green" />
      </div>

      <div className="EmailList__List">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Test"
          subject="Hey, this testing message"
          description="This is testing message"
          time="00:40 am"
        />
      </div>
    </div>
  );
}

export default EmailList;
