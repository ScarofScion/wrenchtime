import React from "react";
import AddCarForm from "./AddCarForm";
import CarList from "./CarList";

const Car = () => (
  <div className="container">
    <img className="showcase" src="/img/car.jpg" />
    <h3>Add Car Form</h3>

    <AddCarForm />
    <CarList />
  </div>
);

export default Car;
