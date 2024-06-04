import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task as TaskType } from './types';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (description: string) => {
    const newTask: TaskType = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;