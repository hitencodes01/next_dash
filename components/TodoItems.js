export default async function TodoItems() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todo = await response.json();
  return <div className="todo-container">
      {todo.map(({ id, title, completed }) => (
        <div key={id} className="todo">
          <input type="checkbox" readOnly checked={completed} />
          <p>{title}</p>
        </div>
      ))}
    </div>;
}
