const DisplayTodo = ({ allTodos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div className="">
      {allTodos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        allTodos.map((ele) => {
          return (
            <div key={ele.id} className="p-5 flex justify-between max-w-[50vw] mx-auto rounded shadow-lg hover:shadow-2xl">
              <p className="font-semibold text-lg">{ele.text}</p>
             <div>
               <button className="border px-3 font-semibold bg-black text-white rounded hover:text-black hover:bg-white" onClick={() => handleEditTodo(ele.id)}>Edit</button>
              <button className="border px-3 font-semibold bg-black text-white rounded hover:text-black hover:bg-white" onClick={() => handleDeleteTodo(ele.id)}>Delete</button>
             </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayTodo;
