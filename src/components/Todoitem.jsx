import styles from "./Todoitem.module.css";
import { MdDelete } from "react-icons/md";

function Todoitem({ todoName, todoDate, handleDeleteButton }) {
  return (
    <div>
      <div className={`${styles["input"]} container`}>
        <div className={`row align-items-center ${styles["kg-row"]} kg-row`}>
          <div className={`${styles["item-container"]} col-5`}>{todoName}</div>
          <div className={`${styles["item-container"]} col-5`}>{todoDate}</div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <button
              type="button"
              className={`${styles["kg-button"]} btn btn-danger kg-button`}
              onClick={() => {
                handleDeleteButton(todoName);
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
