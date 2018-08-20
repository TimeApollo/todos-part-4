import { MARKCOMPLETE , ADDTODO , DELETETODO , CLEARCOMPLETED } from './actions'
import todoList from './todos.json';

const initialState = {
  todos: todoList,
  currentID: todoList.length,
}

const todosReducer = ( state = initialState , action ) => {
  switch (action.type){
    case MARKCOMPLETE:
      let newTodos = state.todos.map( todo => {
        if ( todo.id === Number(action.payload)){
          todo.completed = !todo.completed;
        }
        return todo
      })
      return {
        ...state,
        todos: newTodos
      }
    case ADDTODO:
      console.log(state)
      const newID = state.currentID + 1;
      let newEntry = {
        "userId": 1,
        "id": newID,
        "title": action.payload,
        "completed": false
      }
      return {
        ...state,
        todos: [...state.todos, newEntry],
        currentID: newID
      }
    case DELETETODO:
      let notDeletedTodos = state.todos.filter( todo => todo.id !== Number(action.payload))
      return {
        ...state,
        todos: notDeletedTodos
      }
    case CLEARCOMPLETED:
      let remainingTodos = state.todos.filter( todo => todo.completed === false);
      return {
        ...state,
        todos: remainingTodos
      }
    default:
      return state;
  }
}

export {todosReducer}