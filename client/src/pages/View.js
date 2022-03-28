import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YoutubeEmbed from "../components/YoutubeEmbed";

const axios = require("axios");

export default function View() {
  const [exerciseList, setExerciseList] = useState([]);
  const { name } = useParams();
  const exercise = exerciseList.find(x => x.name === name)
  const embededId = exercise !== undefined ? exercise.video_url.split("=")[1] : null;

  useEffect(() => {
    axios
  .get("/exercises")
  .then((res) => {
    setExerciseList(res.data);
  })
  .catch((err) => {
    console.log(err.message);
  });
  }, []);
  

  return (
    <div>
      <YoutubeEmbed embedId={embededId} class="video-responsive"/>
      <br/>
       <div className="card">
        <figure>
         
        </figure>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>
          <div className="content">{ exercise !== undefined ? exercise.description : null}</div>
        </div>
      </div>
      <br />
      <br />
      <br />




    </div>
  )
}
