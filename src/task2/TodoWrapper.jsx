import { useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleAddTodo(e) {
    e.preventDefault();

    if (editId) {
      console.log("todo edited");
      let updatedTodo = allTodos.map((ele) => {
        return ele.id === editId ? { ...ele, text: todo } : ele;
      });
      setAllTodos(updatedTodo);
      setEditId(null);
    } else {
      let newTodo = {
        id: Date.now(),
        text: todo.trim(),
      };
      console.log(newTodo);

      setAllTodos([...allTodos, newTodo]); // store previous todos and new todo
    }

    setTodo(""); // clear input field
  }

  function handleDeleteTodo(id) {
    //! using splice
    // let index = allTodos.findIndex((ele)=> ele.id === id)
    // let newArray = [...allTodos]
    // newArray.splice(index , 1 )
    // setAllTodos(newArray)

    //! using filter
    let filteredTodo = allTodos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodo);
  }

  function handleEditTodo(id) {
    console.log(id);
    let todoToBeEdited = allTodos.find((ele) => {
      return ele.id === id;
    });

    console.log(todoToBeEdited);
    setTodo(todoToBeEdited.text);
    setEditId(id);
  }

  return (
    <div>
      <CreateTodo
        todo={todo}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
        editId={editId}
      />
      <DisplayTodo
        allTodos={allTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default TodoWrapper;
