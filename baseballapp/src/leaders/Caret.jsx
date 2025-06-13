import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Caret = ({ direction }) => {
  return (
    <svg className={`caret caret-${direction}`}>
      <FontAwesomeIcon icon={faArrowUp} />
    </svg>
  );
};

export default Caret;
