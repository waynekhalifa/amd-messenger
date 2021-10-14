import React from "react";
import ReactDOM from "react-dom";

import Chatbox from "./components/Chatbox";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="container">
      <ContactList />
      <Chatbox />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
