import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YoutubeEmbed from "../components/YoutubeEmbed";

const axios = require("axios");

export default function View() {
  const [exerciseList, setExerciseList] = useState([]);
  const [exercise, setExercise] = useState({});
  const { name } = useParams();
  let hello = [];
  // const embededId = exerciseObj.video_url.split("=")[1];

  useEffect(() => {
    axios
  .get("/exercises")
  .then((res) => {
    setExerciseList(res.data);
    hello = res.data
  })
  .catch((err) => {
    console.log(err.message);
  });
  }, []);
  
  console.log(exerciseList.find(x => x.name === name))
  
  console.log('rendered: ', hello)

  return (
    <div>
       <div className="card">
        <figure>
          {/* <YoutubeEmbed embedId={embededId} /> */}
        </figure>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>
          <div className="content">{}</div>
        </div>
      </div>
      <br />




    </div>
  )
}
