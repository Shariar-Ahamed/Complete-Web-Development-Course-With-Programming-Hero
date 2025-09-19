import "./App.css";
import Library from "./Library";

function App() {
  const books = [
    { id: 1, name: "Physics", price: 235 },
    { id: 2, name: "Chemistry", price: 335 },
    { id: 3, name: "Math", price: 535 },
    { id: 4, name: "Bioloy", price: 135 },
  ];

  return (
    <>
      <h1>React Core cocepts</h1>

      <Library bookName={books}></Library>
      
    </>
  );
}

export default App;
