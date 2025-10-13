const DisplayTodo = ({ allTodos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div>
      {allTodos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        allTodos.map((ele) => {
          return (
            <div key={ele.id}>
              <li>{ele.text}</li>
              <button onClick={() => handleEditTodo(ele.id)}>edit</button>
              <button onClick={() => handleDeleteTodo(ele.id)}>delete</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayTodo;
