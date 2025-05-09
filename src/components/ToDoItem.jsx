import { useState, useEffect } from "react";

function ToDo({ index, item }) {
  const [className, setClassName] = useState("");
  const [isChecked, setIsChecked] = useState(item.isDone);

  useEffect(() => {
    setClassName(isChecked ? "form-check done" : "form-check");
  }, [isChecked]);

  return (
    <div className={className} id="todo-item">
      <input
        className="form-check-input"
        type="checkbox"
        id={"checkbox-" + index}
        defaultChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      ></input>
      <label className="form-check-label" htmlFor={"checkbox-" + index}>
        {item.description}
      </label>
    </div>
  );
}

export default ToDo;
