import React from "react";

const DisplayTodo = ({ allTodos , handleDeleteTodo }) => {
  return (
    <div>
      {allTodos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        allTodos.map((ele) => {
          return (
            <div key={ele.id}>
              <li>{ele.text}</li>
              <button>edit</button>
              <button onClick={() =>  handleDeleteTodo(ele.id)}>delete</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayTodo;
