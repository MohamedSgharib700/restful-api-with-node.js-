const { getAllTodosRepo ,getTodoRepo , storeTodoRepo ,updateTodoRepo , deleteTodoRepo} = require("../repository/todo.repo")
const res = require("express/lib/response");

class TodoService {

    constructor(req,res) {
        this.req = req
        this.res = res
    }
    
    async getAllTodosService() {
        const allTodos = await getAllTodosRepo()
        // business logic
        return {result: allTodos.rows, pagination: {}}
    }

    async getTodoService() {
        const Todo = await getTodoRepo(this.req)
        // business logic
        return {result: Todo.rows[0], pagination: {}}
    }

    async storeTodoService() {
        const newTodo = await storeTodoRepo(this.req)
        // business logic
        return {result: newTodo.rows[0], pagination: {}}
    }

    async updateTodoService() {
        const updateTodo = await updateTodoRepo(this.req)
        // business logic
        return {result:'todo updated successful', pagination: {}}
    }

    async deleteTodoService() {
        const deleteTodo = await deleteTodoRepo(this.req)
        // business logic
        return {result:'todo deleted successful', pagination: {}}
    }


}

module.exports = {TodoService}