import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 * - complete(): fn to call to toggle todo completion
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

//consider create a separate todo with event handler
//top won't pass completable, only editable will pass
//if no complete passed in, can't click on it


function Todo({todo, complete, completable}) {
  const {title, description, priority, isComplete} = todo;

  const crossOutLine = isComplete ? 
                        <s onClick={complete}>{title}</s> : 
                        <b onClick={complete}>{title}</b>


  return (
      <div className="Todo">
        <div>{crossOutLine}<small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
