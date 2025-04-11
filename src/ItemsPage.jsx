import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex.jsx";
import {ItemsNew } from "./ItemsNew.jsx";
import { Modal } from "./Modal.jsx";

export function ItemsPage() {
  const [items, setItems] = useState([]);
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  
  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/items").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/items", params)
    .then((response) => {
      setItems([...items, response.data]);
      successCallback();
    });
  };

  const handleShow = (item) => {
    console.log("handleShow", item);
    setIsItemsShowVisible(true);
  };



  //calls handleIndex whenever the page loads 
  useEffect(handleIndex, []);

  return (
    <main>
      <ItemsNew onCreate={handleCreate}/>
      <ItemsIndex items ={items} onShow={handleShow}/>
      <Modal show={isItemsShowVisible} onClose={() => setIsItemsShowVisible(false)}>
        <h1>test</h1>
      </Modal>
    </main>
  );
}