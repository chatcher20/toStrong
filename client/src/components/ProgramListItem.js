import React from "react";
import "../styles/ProgramListItem.scss";
import icon from '../images/icon.png';
import Button from "../components/Button";

export default function ProgramListItem(props) {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content-programs">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src={icon}
                      alt="toStrong icon"
                    />
                  </figure>
                </div>
                <div className="program-card">
              
                <Button word='select' size='is-small'/>
                <p className="program-title title is-5">{props.name}</p>
                </div>
              </div>
              <br/>
              <label>
                Workout type - 
                </label>
                <p className="subtitle is-6">{props.modality}</p>
                <label>
                equipment(s) - 
                </label>
                <p className="subtitle is-6">{props.type}</p>
                <label>
                Program duration - 
                </label>
                <p className="subtitle is-6">{props.duration}</p>
            </div>
            <div className="content">{props.description}</div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
