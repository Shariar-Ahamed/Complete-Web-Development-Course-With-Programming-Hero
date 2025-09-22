import { use } from "react";  //* React auto import use()

export default function Friends({ friendsPrmise }) {

    const friends = use(friendsPrmise); //* React auto import "use"()
    console.log(friends);

  return (

    <div className="card">
      <h2>Friends:{friends.length}</h2>

        <ol>
          {friends.map(friends => (
            <li key={friends.id}>{friends.name}</li>
        ))}
        </ol>

    </div>

  );
}