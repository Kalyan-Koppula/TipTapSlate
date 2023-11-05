import React, { useContext } from 'react'
import {AppContext} from '@src/context/AppContext'
import ToDo from './ToDo';

const ToDoList = () => {
  const tasks = useContext(AppContext);
  return (
    <>
      <div>List of Todos</div>
      {tasks && tasks.filter(task => !task.done).map(task => (
        <ToDo key={task.id} task={task}/>
      ))}
      <div>Completed Todos</div>
      {tasks && tasks.filter(task => task.done).map(task => (
        <ToDo key={task.id} task={task}/>
      ))}
    </>
  )
}

export default ToDoList