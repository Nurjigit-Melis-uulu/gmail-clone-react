import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import React from "react";
import "./Mail.css";
import { useHistory } from "react-router";

function Mail(props) {
  const history = useHistory();

  return (
    <div className="Mail">
      <div className="Mail__tools">
        <div className="Mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="Mail__body">
        <div className="Mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportantIcon className="Mail__impotant" />
          <p>Title</p>
          <p>10pm</p>
        </div>

        <div className="Mail__message">
          <p>This is a message</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
