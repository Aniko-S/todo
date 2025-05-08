function ToDo({ index, item }) {
  return (
    <div className="form-check" id="todo-item">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={"checkbox-" + index}
        checked={item.isDone}
      ></input>
      <label className="form-check-label" htmlFor={"checkbox-" + index}>
        {item.description}
      </label>
    </div>
  );
}

export default ToDo;
