import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Chatbox from "./components/Chatbox";
import ContactList from "./components/ContactList";

import { users } from "../../data";

function App() {
  const [conversation, setConversation] = useState([]);
  const [selected, setSelected] = useState(null);

  const getMessages = () => {
    setConversation(users);
  };

  const handleClick = (e, id) => {
    let newSelected = conversation.filter((message) => message.id === id);

    setSelected(newSelected[0]);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {conversation.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <ContactList users={conversation} handleClick={handleClick} />
          <Chatbox selected={selected} />
        </div>
      )}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
