import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, update, remove}) {
  
  /** Renders a list of EditableTodos for each todo object */  
  function renderTodos() {
    const todoComponents = todos.map( todo => (
      <EditableTodo 
        key={todo.id}
        todo={todo}
        update={update}
        remove={remove}
      />
    ));
    return todoComponents;
  }

  return (
    <div className="col-md-6">
      {/*   NOTE: Test if working  */}
      {renderTodos()}
    </div>
  );
}

export default EditableTodoList;
