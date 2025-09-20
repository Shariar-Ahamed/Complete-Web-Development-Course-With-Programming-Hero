import { useState } from 'react';

export default function Batsman() {
  const [score, setScore] = useState(0);


  
  const handleSingles = () => {
    setScore(score + 1);
  }

    const handleFour = () => {
    setScore(score + 4);
  }

    const handleSix = () => {
    setScore(score + 6);
  }


  return (
    <div>
         {
            score >= 50 && <h2>Half Century</h2>
         }

      <h2>Player: Bangladesh Batsman</h2>
      <h3>Score: {score}</h3>
      <button onClick={handleSingles}>singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}