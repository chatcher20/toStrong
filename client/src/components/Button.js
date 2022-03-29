import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button
      className={`button is-success ${props.size}`}
      onClick={() => {
        navigate(props.path);
      }}
    >
      {props.word}
    </button>
  );
};

export default Button;
