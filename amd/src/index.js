import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Messenger from "./components/ContactList";
import { conversationData } from "../../data";

function App() {
  const [conversation, setConversation] = useState(null);

  const getMessages = () => {
    setConversation(conversationData);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {conversation === null ? (
        <p>Loading...</p>
      ) : (
        <Messenger conversation={conversation} />
      )}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
