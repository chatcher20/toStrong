import React from "react";
import ExerciseCard from "./LibraryListItem";

export default function LibraryList(props) {
  const { query } = props;
  const lists = "hello"; // need data

  const listCards = lists.filter((list) => {
    if (query === "") {
      return list;
    } else if (
      list.name.toLowerCase().includes(query.toLowerCase()) ||
      list.description.toLowerCase().includes(query.toLowerCase())
    ) {
      return list;
    }
  }).map((list, index) => (
    <ExerciseCard
      key={index}
      name={list.name}
      equipment={list.equipment}
      description={list.description}
    />
  ));

  return <ul>{listCards}</ul>;
}
