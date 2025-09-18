
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Deveeloper name=" Ripon" tech="Java"></Deveeloper>
      <Deveeloper name=" Rafiq" tech="Html"></Deveeloper>
      <Deveeloper name=" Sabana" tech="CSS"></Deveeloper>
    </>
  )
}


//Todo Inline CSS (style attribute) 
function Deveeloper(props) {
  console.log(props);
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
