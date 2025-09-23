import { useEffect, useState } from "react"

export default function Players() {


    //Todo -----Old way to load data----
    const [players, setPlayers] = useState ([])

   useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data))

   },[]);


  return (
    <div className="card">
      <h2>Players {players.length}</h2>
      <ol>
      {
        players.map(player => <li key={player.id}>{player.name}</li>)
      }
      </ol>

    </div>
  )
}