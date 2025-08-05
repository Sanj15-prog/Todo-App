import { useRef } from "react";
import { MdOutlineAddToQueue } from "react-icons/md";
import styles from "./Todoitem.module.css";

function AppTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };
  return (
    <div>
      <form className="container text-center" onSubmit={handleAddButton}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={todoDateElement} />
          </div>

          <div className="col-2 col-2 d-flex align-items-center justify-content-center ">
            <button type="submit" className="btn btn-success kg-button">
              <MdOutlineAddToQueue />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AppTodo;
