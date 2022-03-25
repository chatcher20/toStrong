import React, { useEffect, useState } from "react";
import LibraryListItem from "./LibraryListItem";

const axios = require("axios");

export default function LibraryList(props) {
  const { query } = props;
  const [lists, setLists] = useState([]);
  const [displayedList, setdisplayedList] = useState([]);

  useEffect(() => {
    axios
      .get("/exercises")
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    setdisplayedList(lists);
  }, [lists]);

  useEffect(() => {
    const searchResult = lists.filter((list) => {
      if (query === "") {
        return true;
      } else if (
        list.name.toLowerCase().includes(query.toLowerCase()) ||
        list.description.toLowerCase().includes(query.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    setdisplayedList(searchResult);
  }, [query]);


  const listCardItem = displayedList
    .map((list) => (
      <LibraryListItem
        key={list.id}
        name={list.name}
        description={list.description}
        url={list.video_url}
      />
    ))
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

  return <ul>{listCardItem}</ul>;
}
