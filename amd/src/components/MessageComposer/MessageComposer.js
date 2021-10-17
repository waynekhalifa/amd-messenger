import React from "react";
import { useFilePicker } from "use-file-picker";

function MessageComposer() {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ".txt",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="message-composer">
      <textarea className="message-text" placeholder="Write a message" />
      <div className="attachments">
        <button onClick={() => openFileSelector()} className="attach-icon">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="AttachFileIcon"
          >
            <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path>
          </svg>
        </button>
        {filesContent.map((file, index) => (
          <div>
            <h2>{file.name}</h2>
            <div key={index}>{file.content}</div>
            <br />
          </div>
        ))}
      </div>
      <button className="send">Send</button>
    </div>
  );
}

export default MessageComposer;
