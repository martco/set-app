import React from 'react';
import SetCard from './SetCard'

function App() {
  return (
    <ul className="set-board spaced-cards fit-3 solved">
        <SetCard />
        <SetCard />
        <SetCard />
        <SetCard />
    </ul>
  );
}

export default App;
