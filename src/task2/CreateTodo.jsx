const CreateTodo = ({ todo, setTodo, handleAddTodo, editId }) => {
  return (
    <div className="border p-10 flex items-center justify-center">
      <form onSubmit={handleAddTodo} className=" p-3 rounded shadow-lg">
        <h2 className="text-center font-semibold text-2xl">Create Todo</h2>
        <input
          type="text"
          className="bg-gray-100 p-2 rounded-2xl shadow me-5"
          placeholder="todo..."
          value={todo}
          required
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className={
            editId ? "bg-amber-300 p-2 rounded" : "bg-green-300 p2-rounded"
          }
        >
          {editId ? "Update ✏️" : "Create 🚀"}
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
