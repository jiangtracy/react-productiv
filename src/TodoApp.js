import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {
  const [todos, setTodos] = useState(initialTodos);

  //{} not needed
  /** add a new todo to list */
  function create(newTodo) {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          ...newTodo,
          id: uuid(),
          isComplete: false,
        }
      ]
    });
  }

  /* Toggle a todo between complete/incomplete */

  function complete(todo) {
    setTodos( prevTodos => {
      const otherTodos = prevTodos.filter((t) => t.id !== todo.id);

      return [
        ...otherTodos,
        {
          ...todo,
          isComplete: !todo.isComplete,
        }
      ]
    })
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    
    setTodos( prevTodos => {
      const otherTodos = prevTodos.filter((todo) => todo.id !== updatedTodo.id);
      return [
        ...otherTodos, 
        {
          ...updatedTodo
        }
      ]
    });
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos( prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  }

  /** Renders the EditableTodoList if todos present,
   *  a user message otherwise
   **/  
  function renderTodoList() {
    return todos.length > 0 ? (
      <EditableTodoList todos={todos} update={update} remove={remove} complete={complete}/>
    ) : (
      <span className="text-muted col-md-6">You have no todos.</span>
    );
  }

  /** Renders a TopTodo with the highest priority, 
   * no todo message otherwise
   */
  function renderTopTodo() {
    const atLeastOneIncomplete = todos.some(t => t.isComplete === false);

    return (todos.length > 0 && atLeastOneIncomplete) ? (
      <TopTodo todos={todos}/>
    ) : (
      <span className="text-muted">No todos yet!</span>
    );
  }  

  return (
      <main className="TodoApp">
        <div className="row">

          {renderTodoList()}

          <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
                {renderTopTodo()}
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm handleSave={create}/>

            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;