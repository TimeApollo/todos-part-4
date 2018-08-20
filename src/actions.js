const MARKCOMPLETE = 'MARKCOMPLETE';
const ADDTODO = 'ADDTODO';
const DELETETODO = 'DELETETODO';
const CLEARCOMPLETED = 'CLEARCOMPLETED';

const markComplete = (id) => {
  return{
    type: MARKCOMPLETE,
    payload: id,
  }
}

const addTodo = (todo) => {
  return{
    type: ADDTODO,
    payload: todo,
  }
}

const deleteTodo = (id) => {
  return{
    type: DELETETODO,
    payload: id,
  }
}

const clearCompleted = () => {
  return{
    type: CLEARCOMPLETED,
  }
}

export { 
  markComplete , 
  addTodo , 
  deleteTodo , 
  clearCompleted , 
  MARKCOMPLETE , 
  ADDTODO , 
  DELETETODO , 
  CLEARCOMPLETED ,
}