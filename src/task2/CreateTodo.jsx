const CreateTodo = ({ todo, setTodo, handleAddTodo, editId }) => {
  return (
    <div className=" p-10 flex items-center justify-center">
      <form onSubmit={handleAddTodo} className="min-w-[50vw] p-3 rounded shadow-lg">
        <h2 className="text-center font-semibold text-2xl">Create Todo</h2>
        <div className="flex items-center mt-5">
        <input
          type="text"
          className="bg-gray-100 p-2 w-[80%] rounded shadow me-5"
          placeholder="todo..."
          value={todo}
          required
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className={
            editId ? "bg-amber-300 p-2 rounded" : "bg-green-300 p-2 rounded"
          }
        >
          {editId ? "Update ✏️" : "Create 🚀"}
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
