
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}

function Person() {
  const age = 17;
  const name = 'Ripon';
  return (
    <p>I am a person, My name is: {name} and age {age}</p>
  )
}

function Sports() {
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <p>Playing and lossing</p>
    </div>
  )
}


export default App
