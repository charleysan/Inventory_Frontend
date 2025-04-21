import { useState } from 'react';

export function DescriptionsNew({ itemId, onCreateDescription }) {
  const [quantity, setQuantity] = useState(99);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const params = {
      description: {
        quantity: parseInt(formData.get('Quantity')),
        description: formData.get('description')
      }
    };

    const successCallback = () => form.reset();
    onCreateDescription(itemId, params, successCallback);
  }

  return (
    <div>
      <h3>Add a Description</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Quantity:
            <select 
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            >
            </select>
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea name="Description" required rows="3" />
          </label>
        </div>
        <button type="submit">Submit Description</button>
      </form>
    </div>
  )
}