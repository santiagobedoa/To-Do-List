import React from 'react';
import '../stylessheets/Todo.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Todo({ id, text, done, taskCompleted, deleteTask }) {
  return (
    <div className={done ? 'todo-container done' : 'todo-container'}>
      <div 
        className='todo-text'
        onClick={() => taskCompleted(id)} >
        {text}
      </div>
      <div 
        className='todo-icon-container'
        onClick={() => deleteTask(id)} >
        <AiOutlineCloseCircle className='todo-icon'/>
      </div>
    </div>
  );
}

export default Todo;