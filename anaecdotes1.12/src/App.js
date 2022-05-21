import React, {useState} from 'react';
import './App.css';

function App() {
  const anaecdotes =[
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients'
  ]

 
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anaecdotes.length));
  
  console.log("vote before",votes);
  const next=()=>{
      console.log("Random anaecdote", Math.floor(Math.random() * anaecdotes.length))
      return setSelected(Math.floor(Math.random()*anaecdotes.length))
  }

const onVote=()=>{
  const updateVotes = [...votes];
  console.log("vote",updateVotes);
  console.log("vote type", typeof(votes[selected]));
      updateVotes[selected]+=1;
      setVotes(updateVotes);
}
  return (
    <div className="App">
       {anaecdotes[selected]}<br/>
      {console.log("vote selected", votes[selected])}
       <p> This anaecdote has been voted {votes[selected]} times</p>
       <button onClick={onVote}>vote</button>
       <button onClick={next}>next anaecdote</button>
    </div>
  );
}

export default App;
