import SlowComponent2s from "@/components/SlowComponent2s";
import SlowComponent3s from "@/components/SlowComponent3s";
import TodoItems from "@/components/TodoItems";
import { Suspense } from "react";

const Todos = async () => {
  // const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=2000");
  // const data = await slowResponse.json();
  // const response = await fetch(
  //   "https://jsonplaceholder.typicode.com/todos?_limit=5"
  // );
  // const todo = await response.json();
  const [todoResponse , slowResponse2s , slowResponse3s] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    fetch("https://procodrr.vercel.app/?sleep=2000"),
    fetch("https://procodrr.vercel.app/?sleep=3000"),
  ]);
  const [todo,data1,data2] = await Promise.all([todoResponse.json() , slowResponse2s.json() , slowResponse3s.json()])
  return (
    <>
      {/* <h1 className="text-5xl mb-[10px]">Todos</h1>
    <Suspense fallback="loading todo">
      <TodoItems />
    </Suspense>
    <Suspense fallback={<div>loading 2s</div>}>
      <SlowComponent2s />
    </Suspense>
    <Suspense fallback={<div>loading 3s</div>}>
      <SlowComponent3s />
    </Suspense> */}
    <div className="todo-container">
      {todo.map(({ id, title, completed }) => (
        <div key={id} className="todo">
          <input type="checkbox" readOnly checked={completed} />
          <p>{title}</p>
        </div>
      ))}
    </div>
    <div>{JSON.stringify(data1)}</div>
    <div>{JSON.stringify(data2)}</div>
    </>
  );
};
export default Todos;
