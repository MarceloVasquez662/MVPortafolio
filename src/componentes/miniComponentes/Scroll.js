import React from "react";
import { Link } from "react-scroll";

function Scroll(props) {
  return (
    <Link to={props.hacia} smooth={true} className={props.clase}>
      {props.texto}
    </Link>
  );
}

export default Scroll;
