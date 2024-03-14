// functional imports
import React from "react";

// css imports
import "./components.css";
import "../navigation/navigation.css"

export default function Activity(props) {
  // destructure props
  const { userUsername, title, date } = props;
  
  return(
    <li>
      <p>
        <span className="logout">{userUsername}</span> added 
        <span className="logout">{title}</span> to watch later - 
        <span className="italic">{date}</span>
      </p>
    </li>
  )
}
