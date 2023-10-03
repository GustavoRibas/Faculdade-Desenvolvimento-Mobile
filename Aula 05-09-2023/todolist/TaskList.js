import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDelete(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;