import "./App.css";
import React, { useState } from "react";
import { Row, Divider, Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./Components/FoodBox";

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodList.map((foods, index) => {
          console.log(foodList)
          return (
            <div key={index}>
              <FoodBox foods={foods}/>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
