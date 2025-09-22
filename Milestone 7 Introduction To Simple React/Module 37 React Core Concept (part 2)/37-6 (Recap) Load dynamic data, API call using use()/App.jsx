import { Suspense } from 'react'; //* Suspense React auto
import './App.css';
import Users from './Users';
import Friends from './Friends';


//Todo: Normal fetch promise with json conversion
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());



//Todo: Acync function with fetch and json conversion
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


//* Auto Suspense component for data loading
function App() {
  //
  const friendsPrmise = fetchFriends();

  return (
    <>
      <h2>Vite + React</h2>
      
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>


     <Suspense fallback={<h2>Friends are coming...</h2>}>
      <Friends friendsPrmise={friendsPrmise}> </Friends>
     </Suspense>

    </>
  );
}

export default App;
