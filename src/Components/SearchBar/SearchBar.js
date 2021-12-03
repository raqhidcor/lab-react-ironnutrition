import React from 'react';
import { Input } from "antd";


const SearchBar = (props) => {
    const {searchFood} = props
    return (
        <div className="Search">
            <p>Search</p>
            <Input type="text" onChange={(event) => searchFood(event.target.value)} />
        </div>
    )
}

export default SearchBar;

