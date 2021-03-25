import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import "./EmailRow.css";
import { selectMail } from "./features/MailSlice";

import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

function EmailRow({ title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="EmailRow">
      <div className="EmailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="EmailRow__title">{title}</div>

      <div className="EmailRow__message">
        <h4>
          {subject}
          {" - "}
          <span className="EmailRow__description">{description}</span>
        </h4>
      </div>

      <div className="EmailRow__time">{time}</div>
    </div>
  );
}

export default EmailRow;
