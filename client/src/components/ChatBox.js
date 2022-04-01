import React from "react";
import Paper from "@mui/material/Paper";
import "./ChatBox.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ChatBoxMessage from "./ChatBoxMessage.js";
function ChatBox({ currentlyChatingWith }) {
  let { roomId } = useParams();
  // console.log(currentlyChatingWith);
  // var scroll = document.querySelector(".messageContainer");
  // scroll.scrollTop = scroll.scrollHeight;
  // scroll.animate({ scrollTop: scroll.scrollHeight });
  return (
    <div className="chatbox">
      {roomId ? (
        <div className="messageContainer">
          <ChatBoxMessage
            currentlyChatingWith={currentlyChatingWith}
            person="sender"
          />
          <ChatBoxMessage
            currentlyChatingWith={currentlyChatingWith}
            person="receiver"
          />
        </div>
      ) : (
        "....."
      )}
    </div>
  );
}

export default ChatBox;
