import "bulma/css/bulma.css";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button className="button is-success is-light is-large" onClick={() => {
      navigate(props.path)
    }}>
      {props.word}
    </button>
  );
};

export default Button;
