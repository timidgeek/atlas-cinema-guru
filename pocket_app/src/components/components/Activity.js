// functional imports
import React from "react";

// css imports
import "./components.css";
import "../navigation/navigation.css"

export default function Activity() {
  return(
    <li>
      <p>
        <span className="logout">userUsername</span> added 
        <span className="logout">Title</span> to watch later - Date
      </p>
    </li>
  )
}
