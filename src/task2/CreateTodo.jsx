const CreateTodo = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <h2>Create Todo</h2>
        <input
          type="text"
          placeholder="todo..."
          value={todo}
          required
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>create ✏️</button>
      </form>
    </div>
  );
};

export default CreateTodo;
