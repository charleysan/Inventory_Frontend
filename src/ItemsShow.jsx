export function ItemsShow({ item }) {
  return(
    <div>
      <h1> Item information</h1>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Owner ID: {item.owner_id}</p>
      <p>Store ID: {item.store_id}</p>
    </div>
  );
}