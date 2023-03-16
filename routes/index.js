const express = require("express");
const res = require("express/lib/response");
const { getAllToDos, getToDo, StoreToDo, updateToDo, deleteToDo } = require("../controllers/todo.controller");
const app = express();
const pool = require("../db");



app.use(express.json());

//get all todos methodS
app.get("/getAllTodos" ,getAllToDos);

  // get a todo by todo_id method
  app.get("/getTodo/:id" ,getToDo );

// store todo method
app.post("/todos" , StoreToDo);

// Update a todo by todo_id method
app.put("/updateTodo/:id" , updateToDo);

// todo delete method

app.delete("/deleteTodo/:id" , deleteToDo);


app.listen(5000, () => {
  console.log("server is runing on port 5000");
});
