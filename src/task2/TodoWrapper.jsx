import { useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  function handleAddTodo(e) {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };
    console.log(newTodo);

    setAllTodos([...allTodos, newTodo]);// store previous todos and new todo
    setTodo(""); // clear input field
  }

  function handleDeleteTodo(id){
    //! using splice
    // let index = allTodos.findIndex((ele)=> ele.id === id)
    // let newArray = [...allTodos]
    // newArray.splice(index , 1 )
    // setAllTodos(newArray)

    //! using filter
    let filteredTodo = allTodos.filter((ele) => ele.id !== id)
    setAllTodos(filteredTodo)
  }
  
  return (
    <div>
      <CreateTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <DisplayTodo allTodos={allTodos}  handleDeleteTodo={handleDeleteTodo}/>
    </div>
  );
};

export default TodoWrapper;
