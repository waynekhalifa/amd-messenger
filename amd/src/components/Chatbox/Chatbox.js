import React from "react";

import MessageComposer from "../MessageComposer";

function Chatbox({ selected }) {
  return (
    <div className="chatbox">
      {selected !== null && (
        <>
          <div className="messages-header">
            <div className="name">
              <span>{selected.name}</span>
            </div>
          </div>
          <div className="messages">
            <div class="blocktime">Thursday, 12 November 2020</div>
            <div class="content right">
              <span class="text">test</span>
              <span class="timesent">04:54 PM</span>
              <span class="seen">Unread</span>
            </div>
            <div class="content right">
              <span class="text">test again</span>
              <span class="timesent">04:55 PM</span>
              <span class="seen">Unread</span>
            </div>
            <div class="content left">
              <span class="text">السلام عليكم</span>
              <span class="timesent">02:40 PM</span>
            </div>
          </div>
        </>
      )}
      <MessageComposer />
    </div>
  );
}

export default Chatbox;
