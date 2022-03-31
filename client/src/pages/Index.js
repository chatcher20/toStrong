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
        "A method that takes in an object and returns a stronger version of the
        object."
      </p>
      <br/>
      <div className="root-content">
        <br/>
        <img src={Weightlift} alt="weightlift-img" />
        <div />
        <div className="root-btns buttons are-large">
          <Button word="Sign Up" path="/users/new" />
          <Button word="Sign In" path="/programs/2" />
        </div>
      </div>
    </div>
  );
}
