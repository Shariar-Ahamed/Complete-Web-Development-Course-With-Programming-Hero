import './App.css'
import ToDo from './Todo'

function App() {
  const time = 52;

  return (
    <>
      <h1>Vite + React</h1>
      <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Go sleep" isDone={true}></ToDo>

      {/* <Student></Student> //Comment
      <Student></Student>
      <Person></Person>*/}
    </>
  )
}


export default App
