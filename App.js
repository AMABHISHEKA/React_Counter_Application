import React, { useState } from 'react';
import "./style.css";

const App = () => {
    let [score,setScore] = useState(0)
    
    return(
      <div>
          <h1>Hey this is my Counter Application</h1>
          <h3>The value of Score is {score}</h3>
          <button onClick={() => {setScore(score+1)}}>Increment</button>
          <button onClick={() => (score>0) ? setScore(score-1): " "}>Decrement</button>
          <button onClick={setScore(0)}>Reset</button>
      </div>
    )
}

export default App