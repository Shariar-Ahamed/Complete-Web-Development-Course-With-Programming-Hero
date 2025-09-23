import { use } from "react";  //* React auto import use()
import { Friend } from "./Friend"; // React auto import Friend()

export default function Friends({ friendsPrmise }) {

    const friends = use(friendsPrmise); //* React auto import "use"()
    console.log(friends);

  return (

    <div className="card">
      <h2>Friends:{friends.length}</h2>

        {
            friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
        }
     
    </div>

  );
}