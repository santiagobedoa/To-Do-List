import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo'
import '../stylessheets/List.css'

function List() {

	const [tasks, setTasks] = useState([]);

	const addTask = task => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			const updatedTasks = [task, ...tasks];
			setTasks(updatedTasks);
		}
	}

	const deleteTask = id => {
		const updatedTasks = tasks.filter(task => task.id !==id);
		setTasks(updatedTasks);
	}

	const taskCompleted = id => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				task.done = !task.done;
			}
			return task;
		});
		// completed task will be diplay last
		updatedTasks.sort((a, b) => (a.done && !b.done) ? 1 : ((b.done && !a.done) ? -1 : 0))
		setTasks(updatedTasks);
	}

	return (
		<>
			<Form onSubmit={addTask}/>
			<div className='list-container'>
				{
					tasks.map((todo) =>
						<Todo
							key={todo.id}
							id={todo.id}
							text={todo.text} 
							done={todo.done}
							taskCompleted={taskCompleted}
							deleteTask={deleteTask} />
					)
				}
			</div>
		</>
	);
}

export default List;