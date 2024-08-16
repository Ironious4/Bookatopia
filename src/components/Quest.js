import React, { useState } from 'react';
import './Quest.css'; 

function Quest() {
  const [goal, setGoal] = useState(0);
  const [progress, setProgress] = useState(0);
  const [challenges, setChallenges] = useState([
    { id: 1, text: 'Read 5 books in a month', completed: false },
    { id: 2, text: 'Read 10 pages every day', completed: false },
    { id: 3, text: 'Finish a book in a week', completed: false },
  ]);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const toggleChallengeCompletion = (id) => {
    setChallenges(
      challenges.map(challenge =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  };

  return (
    <div className="quest">
      <h2>Reading Quest</h2>

      <div className="goal-section">
        <label>Set Your Reading Goal:</label>
        <input
          type="number"
          value={goal}
          onChange={handleGoalChange}
          placeholder="Number of books"
        />
        <label>Progress:</label>
        <input
          type="number"
          value={progress}
          onChange={handleProgressChange}
          placeholder="Books read"
        />
        <p>
          {progress}/{goal} books read
        </p>
      </div>

      <div className="challenges-section">
        <h3>Challenges</h3>
        <ul>
          {challenges.map(challenge => (
            <li
              key={challenge.id}
              onClick={() => toggleChallengeCompletion(challenge.id)}
              className={challenge.completed ? 'completed' : ''}
            >
              {challenge.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quest;
