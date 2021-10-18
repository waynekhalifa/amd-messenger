import React from "react";

import MessageComposer from "../MessageComposer";

const CURRENT_USER_ID = 2;

function Chatbox({ selected }) {
  console.log(selected);
  return (
    <div className="chatbox">
      {selected !== null && (
        <>
          <div className="messages-header">
            <div className="name">
              <span>{selected.name}</span>
            </div>
          </div>
          {selected.chat.length > 0 && (
            <div className="messages">
              <div class="blocktime">Thursday, 12 November 2020</div>
              {selected.chat.map((message) => (
                <div
                  class={`content ${
                    CURRENT_USER_ID === message.senderid ? "right" : "left"
                  }`}
                >
                  <span class="text">{message.text}</span>
                  <span class="timesent">{message.timesent}</span>
                  {message.recieverid !== CURRENT_USER_ID &&
                    message.seen === true && <span class="seen">Seen</span>}
                  {message.recieverid !== CURRENT_USER_ID &&
                    message.seen === false && <span class="seen">Unseen</span>}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <MessageComposer />
    </div>
  );
}

export default Chatbox;
