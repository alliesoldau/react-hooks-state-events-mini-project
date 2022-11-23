import React, { useState } from "react";

function NewTaskForm( {categories, onTaskFormSubmit } ) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

const catList = categories.map((cat) => {
  if (cat !== "All") {
  return (
    <option key={cat}>
    {cat}
    </option>
  )}
})

function handleDetailsChange(event) {
  setText(event.target.value);
  console.log(`details: ${event.target.value}`)
}

function handleCategoryChange(event) {
  setCategory(event.target.value);
  console.log(`category: ${event.target.value}`)
}

function handleSubmit(event) {
  event.preventDefault();
  onTaskFormSubmit({ text, category });
  setText("");
  setCategory("Code");
}

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text}
          onChange={handleDetailsChange}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {catList}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
      />
    </form>
  );
}

export default NewTaskForm;
