import React from "react";
import "../styles/ProgramListItem.scss";
import icon from "../images/icon.png";
import Button from "../components/Button";

export default function ProgramListItem(props) {
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
                <div className='program-title'>
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
            <div class="tag is-success has-text-black">{props.modality}</div>
            <div class="tag is-info has-text-dark">{props.type}</div>
            <div class="tag is-link">{`Duration: ${props.duration} Days`}</div>
            </div>
          </div>

          <div className="content is-size-5">{props.description}</div>
        </div>
      </div>
      <br />
    </div>
  );
}
