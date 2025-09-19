import './App.css';
import Actor from './Actor';
import Singer from './Singer';


function App() {

  const singers = [
    {id: 1, name: 'Dr. Mahfuz', age: 65},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'Shuvro Deb', age: 50},
  ];

  const actors = ['Bappa Raj', 'Omar Sunny', 'Amir Hamza', 'Anwar'];

  return (
    <>
      <h1>React Core cocepts</h1>

    {
      singers.map(singer => <Singer key={singer.id} singerName={singer}></Singer>)
    }


    {
      actors.map(actor => <Actor key={actor} actorName={actor}></Actor>)
    }

    </>
  )
}


export default App