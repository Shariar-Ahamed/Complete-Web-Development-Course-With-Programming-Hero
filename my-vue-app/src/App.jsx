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
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Deveeloper name=" Ripon" tech="Java"></Deveeloper>
      <Deveeloper name=" Rafiq" tech="Html"></Deveeloper>
      <Deveeloper name=" Sabana" tech="CSS"></Deveeloper>

      <Player name=" Tamim" runs="5000"></Player>
      <Player name=" Rakib" runs="2000"></Player>
      <Player name=" Arif"></Player> */}
    </>
  )
}

//Todo Efficient way 
// const {name, runs}= {name: 'Tamim', runs:'5000'}

function Player({name, runs = 0}){
  return(
    <div className='player'>
      <h3>Name: {name} </h3>
      <p>runs: {runs} </p>
    </div>
  )
}

//* const {name, tech} = {name: 'Ripon', tech:'Java'}

//Todo Inline CSS (style attribute) 
function Deveeloper(props) {
  // console.log(props);
  return(
    <div style={{
      border: '2px solid green',
      color: 'green',
      textAlign: 'center'
    }}>
      <h3>Deveeloper:{props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}


//Todo Inline CSS 
function Person() {
  const age = 17;
  const name = 'Ripon';

  const personStyle = {
    color:'red',
    textAlign: 'right'
  }

  return (
    <p style={personStyle} >My name: {name} and age {age}</p>
  )
}



//Todo External CSS 
function Student() {
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Dep:</p>
    </div>
  )
}


export default App
