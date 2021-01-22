import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  let top = todos
    .filter(t => t.isComplete === false)
    .reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc);
  return <Todo
            todo={top}
          />;
}

export default TopTodo;