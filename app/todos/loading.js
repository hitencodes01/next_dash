export default function Loading() {
  return (
    <>
      <h1 className="text-5xl">Todos</h1>
      <div className="todos-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="shimmer">
            <div className="shimmer-checkbox"></div>
            <div className="shimmer-text"></div>
          </li>
        ))}
      </div>
    </>
  );
}