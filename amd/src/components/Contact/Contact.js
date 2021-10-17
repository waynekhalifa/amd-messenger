import React from "react";

function Contact({ contact, onClick }) {
  const { id, image, name, role, studentClass } = contact;

  return (
    <div id={id} className="contact" onClick={onClick}>
      <img
        className="avatar"
        src={image}
        alt={`Picture ${name}`}
        title={`Picture of ${name}`}
      />
      <div className="contact-info">
        <div className="name">{name}</div>
        <div className="role">{role}</div>
        <div className="class">{studentClass}</div>
      </div>
    </div>
  );
}

export default Contact;
