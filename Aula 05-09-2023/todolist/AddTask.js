import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      onAdd(task);
      setTask('');
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </div>
  );
};
export default AddTask;