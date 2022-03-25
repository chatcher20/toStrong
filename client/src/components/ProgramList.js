import React, { useEffect, useState } from "react";
import ProgramListItem from "./ProgramListItem";

const axios = require("axios");

export default function ProgramList(props) {
  const { query } = props;
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/programs")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    const searchResult = data.filter((list) => {
      if (query === "") {
        return true;
      } else if (
        list.name.toLowerCase().includes(query.toLowerCase()) ||
        list.description.toLowerCase().includes(query.toLowerCase()) ||
        list.equipment_type.toLowerCase().includes(query.toLowerCase()) 
      ) {
        return true;
      }
      return false;
    });

    setList(searchResult);
  }, [query]);

  useEffect(() => {
    setList(data);
  }, [data]);

  const listCardItem = list
    .map((program) => (
      <ProgramListItem
        key={program.id}
        name={program.name}
        description={program.description}
        duration={program.duration}
        type={program.equipment_type}
      />
    ))
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

  return <div>{listCardItem}</div>;
}
