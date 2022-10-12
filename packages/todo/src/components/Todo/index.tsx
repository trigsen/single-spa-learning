import { FC, useState } from 'react';

export const Todo: FC = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    setTasks((previousTasks) => [
      ...previousTasks,
      { name: inputValue, id: `${inputValue}id` },
    ])

    setInputValue('');
  }

  return (
    <div>
      <h2>What will you do?</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};
