import React from "react";

const MESSAGE = "message";

function Contact({ contact, onClick }) {
  return (
    <div id={contact.id} className="conversation" onClick={onClick}>
      <div className="header">
        <img
          className="avatar"
          src={contact.image}
          alt={`Picture ${contact.name}`}
          title={`Picture of ${contact.name}`}
        />
        <div className="info">
          <div className="name">{contact.name}</div>
          {contact.type === MESSAGE && (
            <div className="message">{contact.chat[0].text}</div>
          )}
        </div>
      </div>
      <div className="footer">
        <div className="role">{contact.role}</div>
        <div className="class">{contact.studentClass}</div>
      </div>
    </div>
  );
}

export default Contact;
