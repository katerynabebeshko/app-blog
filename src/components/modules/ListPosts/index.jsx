import React from "react";
import styles from "./styles.module.scss";

const getListPosts = () => {
  const url =
    "http://blog.api.axenov-it.com/v1/posts?api_key=e6328ed80690c8cba1ed92f822ad7819";
  return fetch(url).then(response => response.json());
};

const ListPosts = () => {
  getListPosts();
  return <h1>Hello ListPosts</h1>;
};

export default ListPosts;
