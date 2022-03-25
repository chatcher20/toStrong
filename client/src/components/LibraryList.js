import React, { useEffect, useState } from "react";
import LibraryListItem from "./LibraryListItem";

const axios = require("axios");

export default function LibraryList(props) {
  const { query } = props;
  const [listCards, setListCards] = useState([]);
  const [lists, setLists] = useState([]);  

  useEffect(() => {
    axios
    .get("http://localhost:3001/exercises")
    .then((res) => {
      setLists(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, [])

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

    setListCards(searchResult)
  }, [query]);

  useEffect(() => {
    setListCards(lists)
  }, [lists])

  console.log("query: ", query);

  console.log("listcards: ", listCards);

  console.log("lists: ", lists);

  const listCardItem = listCards.map((list) => (
    <LibraryListItem name={list.name} description={list.description} url={list.video_url}/>
  ));

  return <ul>{listCardItem}</ul>;
}