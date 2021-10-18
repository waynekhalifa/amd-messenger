import React, { useState } from "react";

import Contact from "../Contact";
import Chatbox from "../Chatbox";

const MESSAGES = "messages";
const USERS = "users";
const MESSAGES_PLACEHOLDER = "Search messages";
const USERS_PLACEHOLDER = "Search users";

function ContactList({ conversation }) {
  const [activeTab, setActiveTab] = useState(MESSAGES);
  const [palceholder, setPlaceholder] = useState(MESSAGES_PLACEHOLDER);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(
    conversation.messages
  );

  let filteredConversations = currentConversation.filter(
    (conversation) =>
      conversation.name
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase()) ||
      conversation.studentClass
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase()) ||
      conversation.role.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleView = (view) => {
    if (view === MESSAGES) {
      setCurrentConversation(conversation.messages);
      setPlaceholder(MESSAGES_PLACEHOLDER);
      setActiveTab(MESSAGES);
      setSelected(null);
    } else {
      setCurrentConversation(conversation.users);
      setPlaceholder(USERS_PLACEHOLDER);
      setActiveTab(USERS);
      setSelected(null);
    }
  };

  const handleClick = (e, id) => {
    let newSelected = filteredConversations.filter(
      (conversation) => conversation.id === id
    );

    setSelected(newSelected[0]);
  };

  return (
    <div className="container">
      <div className="contacts">
        <div className="form">
          <input
            className="form-control"
            type="text"
            placeholder={palceholder}
            onChange={handleChange}
            value={searchText}
          />
        </div>
        <div className="conversations">
          {filteredConversations.map((conversation) => (
            <Contact
              key={conversation.id}
              contact={conversation}
              onClick={(e) => handleClick(e, conversation.id)}
            />
          ))}
        </div>
        <div className="contacts-actions">
          <button
            className={activeTab === MESSAGES ? "active" : ""}
            onClick={() => handleView(MESSAGES)}
          >
            Messages
          </button>
          <button
            className={activeTab === USERS ? "active" : ""}
            onClick={() => handleView(USERS)}
          >
            Users
          </button>
        </div>
      </div>
      <Chatbox selected={selected} />
    </div>
  );
}

export default ContactList;
