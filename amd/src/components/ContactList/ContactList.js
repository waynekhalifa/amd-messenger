import React, { useState } from "react";

import Contact from "../Contact";
import Chatbox from "../Chatbox";

import {
  MESSAGES,
  USERS,
  MESSAGES_PLACEHOLDER,
  USERS_PLACEHOLDER,
  CURRENT_USER_ID,
  MONTH_NAMES,
  WEEK_NAMES,
} from "../../constants";

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

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  }

  const handleNewMessage = (e, recieverid) => {
    const messageText = document.getElementById("message-text");
    console.log(messageText.innerHTML);
    const today = new Date();
    const todayWeek = WEEK_NAMES[today.getDay()];
    const todayNumber = today.getDate();
    const todayMonthName = MONTH_NAMES[today.getMonth()];
    const todayYear = today.getFullYear();

    const newMessage = {
      id: today.valueOf(),
      text: messageText.value,
      timesent: formatAMPM(today),
      date: `${todayWeek}, ${todayNumber} ${todayMonthName} ${todayYear}`, //"Thursday, 12 November 2020",
      seen: false,
      senderid: CURRENT_USER_ID,
      recieverid: recieverid,
    };

    // push new message to selected as a new message
    const newChatMessage = [...selected.chat, newMessage];
    const newSelected = {
      ...selected,
      chat: newChatMessage,
    };

    setSelected(newSelected);
    messageText.value = "";
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
      <Chatbox selected={selected} handleNewMessage={handleNewMessage} />
    </div>
  );
}

export default ContactList;
