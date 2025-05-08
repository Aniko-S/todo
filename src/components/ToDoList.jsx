import data from "../data.js";
import ToDo from "./ToDo.jsx";

function ToDoList() {
  return (
    <ul>
      {data.map((item, index) => {
        return <ToDo key={index} index={index} item={item}></ToDo>;
      })}
    </ul>
  );
}

export default ToDoList;
