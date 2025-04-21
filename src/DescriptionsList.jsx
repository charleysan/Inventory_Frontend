export function DescriptionsList({ description }) {
  return (
    <div>
      <h3>Description:</h3>
      {description.map((description) => (
        <div key={description.id}>
          <p>Quantity: {description.quantity}</p>
          <p>Description: {description}</p>
        </div>
      ))}
    </div>
  )
}