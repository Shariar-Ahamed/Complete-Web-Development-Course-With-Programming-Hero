
import './App.css'

function App() {


  function handleClick() {
    alert('Button Clicked!')
  }

  // Most use of the time, you will use arrow functions
  const handleClick3 = () => {
    alert('Button Clicked 3!')
  }


  const handleAdds = (num) => {
    const newNum = num + 5
    alert(newNum)
  }

  return (
    <>
    
      <h3>Vit + React</h3>
      {/* <button onclik="handleClick()">Click Me</button> */}


      <button onClick={handleClick}>Clik Me 1!</button>


      <button onClick={function handleClick2() {
        alert('Button Clicked 2!')
      }}>Clik Me 2!</button>


      {/* Most use of the time, you will use arrow functions */}
      <button onClick={handleClick3} >Clik Me 3!</button>


      <button onClick={() => {
        alert('Button Clicked 4!')
      }}>Clik Me 4!</button>


      <button onClick={() => handleAdds(7)}>Click add 7 and 5</button>


    </>
  )
}

export default App
