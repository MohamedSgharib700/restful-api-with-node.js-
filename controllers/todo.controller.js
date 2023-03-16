
const { TodoService } = require("../services/todo.service");



const getAllToDos = async (req, res) => {
    try {
      // throw new Error('test error')
      const result  = await new TodoService().getAllTodosService()
      res.json(result);
    } catch (err) {
      console.log({ err });
    }
  }

  const getToDo = async (req, res) => {
    try {
      const result  = await new TodoService(req).getTodoService()
      res.json(result);
    } catch (err) {
      console.log({ err });
    }
  }

  const StoreToDo = async (req, res) => {
    try {
      const result  = await new TodoService(req).storeTodoService()
      res.json(result);
    } catch (err) {
      console.log({ err });
    }
  }

  const updateToDo = async (req, res) => {
    try {
      const result  = await new TodoService(req).updateTodoService()
      res.json(result);
    } catch (err) {
      console.log({ err });
    }
  }

  const deleteToDo = async (req, res) => {
    try {
      const result  = await new TodoService(req).deleteTodoService()
      res.json(result);
    } catch (err) {
      console.log({ err });
    }
  }

  module.exports = {getAllToDos , getToDo , StoreToDo , updateToDo , deleteToDo}