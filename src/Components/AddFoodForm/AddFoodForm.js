import React from 'react';
import { Input } from "antd";
import { useState } from "react";


const AddFoodForm = (props) => {

    const {foodList, setFood} = props

    const [inputName, setInputName] = useState('')
    const [inputImage, setInputImage] = useState('')
    const [inputCalories, setInputCalories] = useState(0)
    const [inputServings, setInputServings] = useState(0)

    const addFood = () => {
        const foodListCopy = [...foodList]
        foodListCopy.push({
            name: inputName,
            image: inputImage,
            calories: inputCalories,
            servings: inputServings,
        });
        setFood(foodListCopy)
    }

    return (
        <div className="AddFoodForm">
            <p>Name</p>
            <Input type="text" onChange={(event) => setInputName(event.target.value)} />
            <p>Image</p>
            <Input type="text" onChange={(event) => setInputImage(event.target.value)} />
            <p>Calories</p>
            <Input type="number" onChange={(event) => setInputCalories(event.target.value)}/>
            <p>Servings</p>
            <Input type="number" onChange={(event) => setInputServings(event.target.value)} />
            <button onClick={() => addFood()}>Add food</button>
        </div>
    );
}






export default AddFoodForm;
