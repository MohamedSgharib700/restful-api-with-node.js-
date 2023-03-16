const pool = require("../db");

// data logic
const getAllTodosRepo = async ()=>{

return await pool.query("SELECT * FROM todo");

}    

const getTodoRepo = async (req)=>{
    const {id} = req.params;

    return await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    
    }
    
const storeTodoRepo = async (req)=>{
    const { descripition } = req.body;

    return newTodo = await pool.query(
        `insert into todo(descripition) values ('${descripition}')`
      );
    
    }

const updateTodoRepo = async (req)=>{
    const {id} = req.params;
    const { descripition } = req.body;

    return updateTodo = await pool.query("UPDATE todo SET descripition =$1  WHERE todo_id = $2", [ descripition, id ]);
    
    }

    const deleteTodoRepo = async (req)=>{
        const {id} = req.params;
    
        return deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [ id ]);
        
        }    

module.exports = {getAllTodosRepo , getTodoRepo , storeTodoRepo , updateTodoRepo , deleteTodoRepo}