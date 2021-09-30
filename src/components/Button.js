import React, { useState } from "react";
function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [display] = useState(props.display);
  return (
    <button className={`btn-${variant} btn-${size} display-${display} `}>{props.children}</button>
  );
}
export default Button;