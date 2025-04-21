import axios from "axios";
import { useState, useEffect } from 'react'
import { DescriptionsList } from './DescriptionsList';
import { DescriptionsNew } from './DescriptionsNew';



export function ItemsShow({ item, onUpdate, onDestroy }) {
  const [descriptions, setDescriptions] = useState([])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(item, params, successCallback);
  };

  const handleCreateDescription =(itemid, params, successCallback) => {
    axios.post(`http://localhost:3000/items/${itemId}/description`, params)
    .then((response) => {
      setDescriptions([...description, response.data]);
      successCallback();
    })
    .catch((error) => {
      console.log(error);
    });
}

 // use effect to fetch reviews whenever the landmark changes
 useEffect(() => {
  // only going to fetch the data if there's a valid landmark with a valid id
  if (item && item.id) {
    axios.get(`http://localhost:3000/api/v1/items/${item.id}/description`)
      .then((response) => {
        // only update the review state if the response contains reviews
        if (response.data.reviews) {
          setDescriptions(response.data.reviews);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // re-run effect when the landmark changes
}, [descriptions])

  return(
    <div>
      <h1> Item information</h1>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Owner ID: {item.owner_id}</p>
      <p>Store ID: {item.store_id}</p>
      <form onSubmit={handleSubmit}>
      <div>
        Name: <input defaultValue={item.name} name="name" type="text" />
      </div>
      <div>
        Price: <input defaultValue={item.price} name="price" type="text" />
      </div>
      <div>
        Owner ID: <input defaultValue={item.owner_id} name="owner_id" type="text" />
      </div>
      <div>
        Store ID: <input defaultValue={item.store_id} name="store_id" type="text" />
      </div>
      <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(item)}>Destroy</button>
      <hr/>
      <div>
        <DescriptionsList description={descriptions} />
        <DescriptionsNew descriptionID={item.id} onCreateDescription={handleCreateDescription}/>
      </div>
    </div>
  );
}