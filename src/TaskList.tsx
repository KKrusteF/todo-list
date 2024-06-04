import React from 'react';
import { Task as TaskType } from './types';
import Task from './Task';

interface TaskListProps {
  tasks: TaskType[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;