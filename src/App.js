import "./App.css";
import React, { useState } from "react";
import { Row, Divider} from "antd";
import foods from "./foods.json";
import FoodBox from "./Components/FoodBox/FoodBox";
import AddFoodForm from "./Components/AddFoodForm/AddFoodForm";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [notSearchFoodList, setNotSearchFoodList] = useState(foods);

  const searchFood = (searchText) => {
    const searchedFood = notSearchFoodList.filter(food =>{
      return food.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) 
    })
    setFoodList(searchedFood)
  }

  const deleteFoodAndUpdate = (selectedFood)=>{
    const deletedFood = foodList.filter(food=>{
      return selectedFood !== food.name;
    })
    setFoodList(deletedFood)
  }

  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm foodList={foodList} setFood={setFoodList} setNotSearchFoodList={setNotSearchFoodList}/>

      <Divider> <SearchBar searchFood={searchFood}/> </Divider>
          
      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodList.map((foods, index) => {
          console.log(foodList);
          return (
            <div key={index}>
              <FoodBox foods={foods} deleteFoodAndUpdate ={deleteFoodAndUpdate}/>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
