import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex.jsx";

export function ItemsPage() {
  const [items, setItems] = useState([]);
  
  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/items").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };
  //calls handleIndex whenever the page loads 
  useEffect(handleIndex, []);

  return (
    <main>
      <ItemsIndex items ={items}/>
    </main>
  );
}