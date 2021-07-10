import React from "react";
import './search-box.css';

export const SearchBox = ({ placeholder, handleChange }) =>(
    <input 
        className = "searchInput"
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    /> 
);
{/* console.log(e.target.value) */}