export function ItemsShow({ item, onUpdate, onDestroy }) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(item, params, successCallback);
  };

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
    </div>
  );
}