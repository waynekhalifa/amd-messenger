import React, { useState } from "react";

import Contact from "../Contact";
import Message from "../Message";

const MESSAGES = "messages";
const USERS = "users";
const MESSAGES_PLACEHOLDER = "Search messages";
const USERS_PLACEHOLDER = "Search users";

function ContactList({ handleClick, users }) {
  const [view, setView] = useState(MESSAGES);
  const [palceholder, setPlaceholder] = useState(MESSAGES_PLACEHOLDER);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleView = (view) => {
    setView(view);
    view === MESSAGES
      ? setPlaceholder(MESSAGES_PLACEHOLDER)
      : setPlaceholder(USERS_PLACEHOLDER);
  };

  return (
    <div className="contacts">
      <div className="form">
        <input
          className="form-control"
          type="text"
          placeholder={palceholder}
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className="conversations">
        {users.map((user) => (
          <Contact
            key={user.id}
            contact={user}
            onClick={(e) => handleClick(e, user.id)}
          />
        ))}
      </div>
      <div className="contacts-actions">
        <button
          className={view === MESSAGES ? "active" : ""}
          onClick={() => handleView(MESSAGES)}
        >
          Messages
        </button>
        <button
          className={view === USERS ? "active" : ""}
          onClick={() => handleView(USERS)}
        >
          Users
        </button>
      </div>
    </div>
  );
}

export default ContactList;
