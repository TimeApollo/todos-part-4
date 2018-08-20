import React, { Component } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { Link, Route, Switch , withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { markComplete , addTodo , deleteTodo , clearCompleted } from './actions'


class App extends Component {
  // state = {
  //   todos: todoList,
  //   currentID: todoList.length,
  // }

  inputText = (event) => {
    if (event.keyCode === 13){
      this.props.addTodo(event.target.value)
      event.target.value = '';
    }
  }

  toggleCheck = (event) => {
    this.props.markComplete(event.target.name)
  }

  deleteOne = (event) => {
    this.props.deleteTodo(event.target.name)
  }

  deleteAll = (event) => {
    this.props.clearCompleted();
  }

  allTodos = () => {
    return (
      <TodoList 
        todos={this.props.todos}
        toggleCheck={this.toggleCheck}
        deleteOne={this.deleteOne}
      />
    )
  }

  activeTodos = () => {
    let active = this.props.todos.filter( todo => todo.completed === false );
    return (
      <TodoList 
        todos={active}
        toggleCheck={this.toggleCheck}
        deleteOne={this.deleteOne}
      />
    )
  }

  completedTodos = () => {
    let completed = this.props.todos.filter( todo => todo.completed === true );
    return (
      <TodoList 
        todos={completed}
        toggleCheck={this.toggleCheck}
        deleteOne={this.deleteOne}
      />
    )
  }

  render() {
    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <input 
            type='text' 
            className='new-todo' 
            placeholder='What needs to be done?'
            onKeyDown={this.inputText}
            autoFocus
          />
        </header>
        <section className='main'>
          <Switch>
            <Route exact path='/' component={this.allTodos}/>
            <Route path='/active' component={this.activeTodos}/>
            <Route path='/completed' component={this.completedTodos}/>
          </Switch>
        </section>
        <footer className="footer">
				  <span className="todo-count"><strong>{this.props.todos.length}</strong> item(s) left</span>
          <ul className="filters">
           <li>
            <Link to="/">
            All
            </Link>
           </li>
           <li>
            <Link to="/active">
             Active
            </Link>
           </li>
           <li>
            <Link to="/completed">
             Completed
            </Link>
           </li>
          </ul>
				  <button className="clear-completed" onClick={this.deleteAll}>Clear completed</button>
			  </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  currentID: state.currentID
});

const mapDispatchToProps = (dispatch) => {
  return {
    markComplete: (id) => {
      dispatch(markComplete(id))
    },
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    },
    clearCompleted: () => {
      dispatch(clearCompleted())
    }
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
