import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import Todoitems from "./components/Todoitems";
import Todoitem from "./components/Todoitem";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemdueDate) => {
    setTodoItems((currvalue) => [
      ...currvalue,
      { name: itemName, dueDate: itemdueDate },
    ]);
  };
  const handleDeleteButton = (todoItemName) => {
    setTodoItems(todoItems.filter((item) => item.name !== todoItemName));
  };

  return (
    <div className="app-container">
      <div className="content-holder">
        <center className="todo-container">
          <AppName />

          <AppTodo onNewItem={handleNewItems} />
          <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
          <Todoitems
            todoItems={todoItems}
            handleDeleteButton={handleDeleteButton}
          />
        </center>
      </div>
    </div>
  );
}

export default App;
