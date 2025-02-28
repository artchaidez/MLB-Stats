import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Caret = ({ direction }) => {
  return (
    <svg className={direction}>
      <FontAwesomeIcon icon={faArrowUp} />
    </svg>
  );
};

export default Caret;
