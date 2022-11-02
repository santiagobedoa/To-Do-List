import Reac, { useState } from 'react';
import '../stylessheets/Form.css'
import { v4 as uuidv4 } from 'uuid';

function Form({ onSubmit }) {

	const [input, setInput] = useState('');

	const changeHandler = e => {
		setInput(e.target.value);
	}

	const sendHandler = e => {

		e.preventDefault();

		const newTask = {
			id: uuidv4(),
			text: input,
			done: false
		}

		onSubmit(newTask);

	}

	return (
		<form 
			className='form'
			onSubmit={sendHandler}>
			<input
				className='input'
				type='text'
				placeholder='Buy Milk'
				name='text'
				onChange={changeHandler}
			/>
			<button className='todo-button'>
				Add
			</button>
		</form>
	);
}

export default Form;