import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import firebase from "firebase";

import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";

import "./SendMail.css";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

function SendMail(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="SendMail">
      <div className="SendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="SendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="text"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && <p className="SendMail__error">To is required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {errors.to && <p className="SendMail__error">Subject is required</p>}
        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="SendMail__message"
          ref={register({ required: true })}
        />
        {errors.to && <p className="SendMail__error">Message is required</p>}

        <div className="SendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
