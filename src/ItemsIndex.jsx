export function ItemsIndex({ items }) {
  return (
    <div>
      <h1>All items ({items.length} total)</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price:$ {item.price} </p>
          <p>Owner ID: {item.owner_id} </p>
          <p>Store ID: {item.store_id} </p>
      </div>
    ))}
    </div>
  );
}