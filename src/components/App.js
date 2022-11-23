import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState(CATEGORIES);

  function handleDeleteTask(textOfTask) {
    setTasks(tasks.filter((task) => task.text !== textOfTask));
  }

  function handleAddTask(addedTask) {
    setTasks([...tasks, addedTask]);
    console.log(tasks)
  }

  const applyCatFilter = tasks.filter((task) => {
    if (category === "All") {
      return true;
    } else if (task.category === category) {
      return true;
  }})

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category} 
        onSelectedCategory={setCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
        tasks={applyCatFilter} 
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
