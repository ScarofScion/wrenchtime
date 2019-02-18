import React from "react";

const AddCarForm = () => (
  <form>
    <label>
      Make:
      <input type="text" name="make" />
    </label>
    <br />
    <label>
      Model:
      <input type="text" name="Model" />
    </label>
    <br />
    <label>
      Mileage:
      <input type="number" name="Mileage" />
    </label>
    <button>Add</button>
  </form>
);

export default AddCarForm;
