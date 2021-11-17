import React from "react"
export default props => (
  <button className={props.type} onClick={props.action} type={props.type}>
    {props.text}
  </button>
)