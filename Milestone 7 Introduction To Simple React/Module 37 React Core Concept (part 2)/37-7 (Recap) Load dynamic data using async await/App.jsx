import { Suspense } from 'react'; //* Suspense React auto
import './App.css';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';


//Todo: Normal fetch promise with json conversion
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());



//Todo: Acync function with fetch and json conversion
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

//Todo: Acync function with fetch and json conversion Posts
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


//* Auto Suspense component for data loading
function App() {
  //Users fetch promise
  const friendsPrmise = fetchFriends();

  //Posts fetch promise
  const postsPrmise = fetchPosts();


  return (
    <>
      <h2>Vite + React Go</h2>
      
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>


     <Suspense fallback={<h2>Friends are coming...</h2>}>
      <Friends friendsPrmise={friendsPrmise}> </Friends>
     </Suspense>


     <Suspense fallback={<h2>Posts are coming...</h2>}>
      <Posts postsPrmise={postsPrmise}> </Posts>
     </Suspense>

    </>
  );
}

export default App;
