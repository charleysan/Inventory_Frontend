export function ItemsNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target; //Gets tthe form element that triggered this event
    const params = new FormData(form); //Creates a FormData object containing all the formss input values
    const successCallback = () => form.reset(); //Creates a function that will clear the form when called
    onCreate(params, successCallback); //Calls the OnCreate function passed from the parent with the form data and reset function
  };

  return(
    <div>
    <h1>New Item!</h1>
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input name="name" type="text" />
      </div>
      <div>
        Price: <input name="price" type="text" />
      </div>
      <div>
        Owner ID: <input name="owner_id" type="text" />
      </div>
      <div>
        Store ID: <input name="store_id" type="text" />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
  );
}