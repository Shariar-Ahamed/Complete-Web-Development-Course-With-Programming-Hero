import { use } from 'react'; //* React auto import use()

export default function Users({ fetchUsers }) {
  // React 18 experimental use()

  const users = use(fetchUsers); //* React auto import "use"()
  console.log(users);

  return (
    <div className="card">

      <h2>Users: {users.length}</h2>

    </div>
  );
}
