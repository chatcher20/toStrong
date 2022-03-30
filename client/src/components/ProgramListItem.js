import React from "react";
import "../styles/ProgramListItem.scss";
import icon from "../images/icon.png";
import Button from "../components/Button";

export default function ProgramListItem(props) {
  const tag = (text) => {
    if (text === "Full-body") {
      return <div class="tag is-warning is-medium has-text-black">{text}</div>;
    }
    if (text === "Upper-body") {
      return <div class="tag is-info is-medium has-text-white">{text}</div>;
    }
    if (text === "Lower-body") {
      return <div class="tag is-dark is-medium has-text-white">{text}</div>;
    }
    if (text === "Barbell") {
      return <div class="tag is-danger is-medium has-text-white">{text}</div>;
    }
    if (text === "Commercial Gym") {
      return <div class="tag is-link is-medium has-text-white">{text}</div>;
    }
    if (text === "Bodyweight") {
      return <div class="tag is-light is-medium has-text-black">{text}</div>;
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content-programs">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={icon} alt="toStrong icon" />
                </figure>
                <div className="program-title">
                  <p className="title is-5">{props.name}</p>
                </div>
              </div>

              <div>
                <Button
                  word="select"
                  size="is-medium-small"
                  path={`/programs/${props.id}/initweight`}
                />
              </div>
            </div>
            <div className="library-tag">
              {tag(props.modality)}
              {tag(props.type)}
            </div>
            <div>
              <strong>Duration</strong>:{` ${props.duration} workouts`}
            </div>
          </div>

          <div className="content is-size-5">{props.description}</div>
        </div>
      </div>
      <br />
    </div>
  );
}
