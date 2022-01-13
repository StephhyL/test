import React from "react";
import className from "classnames";

//import stylesheet
import "../styles/css/Button.css";

/** Returns a button with different stylings depending on class */
export default function Button(props) {
  //assigns different classes based on incoming props. Classes associated with styling.
  const buttonClass = className("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
