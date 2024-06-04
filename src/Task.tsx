import React from 'react';
import { Task as TaskType } from './types';

interface TaskProps {
  task: TaskType;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.description}
      </span>
      <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">
        Delete
      </button>
    </div>
  );
};

export default Task;