import React, { useState } from "react";

import Contact from "../Contact";
import Message from "../Message";

const MESSAGES = "messages";
const USERS = "users";
const MESSAGES_PLACEHOLDER = "Search messages";
const USERS_PLACEHOLDER = "Search users";

function ContactList() {
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

  const users = [
    {
      id: 1,
      image:
        "http://fgs.entrepreware.com/theme/image.php/academi/core/1634130003/u/f1",
      name: "Feras Osama Hassan",
      role: "Student",
      studentClass: "Language Primary 1",
    },
    {
      id: 2,
      image:
        "http://fgs.entrepreware.com/theme/image.php/academi/core/1634130003/u/f1",
      name: "Feras Osama Hassan",
      role: "Student",
      studentClass: "Language Primary 1",
    },
    {
      id: 3,
      image:
        "http://fgs.entrepreware.com/theme/image.php/academi/core/1634130003/u/f1",
      name: "Feras Osama Hassan",
      role: "Student",
      studentClass: "Language Primary 1",
    },
    {
      id: 4,
      image:
        "http://fgs.entrepreware.com/theme/image.php/academi/core/1634130003/u/f1",
      name: "Feras Osama Hassan",
      role: "Student",
      studentClass: "Language Primary 1",
    },
    {
      id: 5,
      image:
        "http://fgs.entrepreware.com/theme/image.php/academi/core/1634130003/u/f1",
      name: "Feras Osama Hassan",
      role: "Student",
      studentClass: "Language Primary 1",
    },
    {
      id: 6,
      image:
        "http://fgs.entrepreware.com/theme/image.php/academi/core/1634130003/u/f1",
      name: "Feras Osama Hassan",
      role: "Student",
      studentClass: "Language Primary 1",
    },
    {
      id: 7,
      image:
        "http://fgs.entrepreware.com/theme/image.php/academi/core/1634130003/u/f1",
      name: "Feras Osama Hassan",
      role: "Student",
      studentClass: "Language Primary 1",
    },
  ];
  const contacts = [];

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
          <Contact key={user.id} contact={user} />
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
