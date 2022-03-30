import "../styles/Index.scss";
import Button from "../components/Button";
import Weightlift from "../images/weightlift.png";

export default function Front() {
  return (
    <div>
      <h1 className="title is-size-2 has-text-black">
        <strong className="has-text-black">.toStrong()</strong>
      </h1>
      <p className="has-text-black is-size-4 root-p">
        A method that takes an object and returns a strong version of the
        object"
        <div className="MDN is-italic">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - MDN Web Docs
        </div>
      </p>
      <div className="root-content">
        <br/>
        <img src={Weightlift} alt="weightlift-img" />
        <div />
        <div className="root-btns buttons are-large">
          <Button word="Sign Up" path="/users/new" />
          <Button word="Sign in" path="/signin" />
        </div>
      </div>
    </div>
  );
}
