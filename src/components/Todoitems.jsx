import Todoitem from "./Todoitem";

const Todoitems = ({ todoItems, handleDeleteButton }) => {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <Todoitem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            handleDeleteButton={handleDeleteButton}
          ></Todoitem>
        ))}
      </div>
    </>
  );
};
export default Todoitems;
