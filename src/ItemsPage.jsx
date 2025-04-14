import axios from "axios";
import { useState, useEffect } from "react";
import { ItemsIndex } from "./ItemsIndex.jsx";
import {ItemsNew } from "./ItemsNew.jsx";
import { ItemsShow} from "./ItemsShow.jsx";
import { Modal } from "./Modal.jsx";

export function ItemsPage() {
  const [items, setItems] = useState([]);
  const [isItemsShowVisible, setIsItemsShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  
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
    setCurrentItem(item);
  };

  const handleUpdate = (item, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`http://localhost:3000/items/${item.id}`, params)
    .then((response) => {
      console.log(response.data);
      setItems(items.map(item => item.id === response.data.id ? response.data : item));
      successCallback();
      setIsItemsShowVisible(false);
    });
  };

  const handleDestroy = (item) => {
    console.log( "in the handleDestory method");
    console.log(item);
    axios.delete(`http://localhost:3000/items/${item.id}`)
    .then(() =>{
      setItems(items.filter((i) => i.id !== item.id));
      setIsItemsShowVisible(false);
    })
  }

  //calls handleIndex whenever the page loads 
  useEffect(handleIndex, []);

  return (
    <main>
      <ItemsNew onCreate={handleCreate}/>
      <ItemsIndex items ={items} onShow={handleShow}/>
      <Modal show={isItemsShowVisible} onClose={() => setIsItemsShowVisible(false)}>
        <ItemsShow item={currentItem} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}