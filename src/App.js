import "./App.css";
import React, { useState } from "react";
import { Row, Divider, Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./Components/FoodBox/FoodBox";
import AddFoodForm from "./Components/AddFoodForm/AddFoodForm";

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm foodList={foodList} setFood={setFoodList} />

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodList.map((foods, index) => {
          console.log(foodList);
          return (
            <div key={index}>
              <FoodBox foods={foods} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
