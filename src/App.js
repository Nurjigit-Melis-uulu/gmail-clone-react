import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/MailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="App__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    </BrowserRouter>
  );
}

export default App;
