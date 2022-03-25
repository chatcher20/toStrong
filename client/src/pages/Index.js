import "../components/App.scss";
import Button from "../components/Button";
import Weightlift from "../images/weightlift.png";


export default function Front() {
  return (
    <div>
    <h1 className="title is-size-2 has-text-black">
      <u>🏋️.toStrong</u>
    </h1>
    <p className="has-text-black is-size-4">
      "The <strong className="has-text-black">toStrong()</strong> method takes
      an object and returns a strong version of the object"
    </p>
    <div />
    <br/>
    <img src={Weightlift} alt="weightlift-img"/>
    <div />
    <br/>
    <br/>
    <div className='root-btns buttons are-large'>
      <Button word="Sign Up" path="/users/new"/>
      <Button word="Sign in" path="/signin"/>
    </div>
  </div>
  )
}

