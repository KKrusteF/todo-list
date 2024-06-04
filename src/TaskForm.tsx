import React, { useState } from 'react';

interface TaskFormProps {
  addTask: (description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      addTask(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;