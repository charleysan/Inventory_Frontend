import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex.jsx";
import {ItemsNew } from "./ItemsNew.jsx";

export function ItemsPage() {
  const [items, setItems] = useState([]);
  
  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/items").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.item("http://localhost:3000/items", params).then((response) => {
      setItems([...items, response.data]);
      successCallback();
    });
  };



  //calls handleIndex whenever the page loads 
  useEffect(handleIndex, []);

  return (
    <main>
      <ItemsNew onCreate={handleCreate}/>
      <ItemsIndex items ={items}/>
    </main>
  );
}