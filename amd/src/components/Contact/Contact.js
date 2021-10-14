import React from "react";

function Contact({ contact }) {
  const { image, name, role, studentClass } = contact;
  return (
    <div className="contact">
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
