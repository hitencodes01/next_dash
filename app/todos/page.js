const  Todos = async() => {
  const slowResponse = await fetch('https://procodrr.vercel.app/?sleep=2000')
  const data = await slowResponse.json()
  const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5", {next : {
          revalidate : 5000
        }}
      );
      const todo = await response.json();
  return (
    <div className="todo-container">
      <h1 className="text-5xl mb-[10px]">Todos</h1>
      {todo.map(({id,title,completed})=>(
        <div key={id} className="todo">
        <input type="checkbox" readOnly checked={completed} />
        <p>{title}</p>
        </div>
      ))}
    </div>
  )
}
export default Todos