import './App.css';
import freecodecampLogo from './images/freecodecamp-logo.png'
import Todo from './components/Todo'
import Form from './components/Form'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img src={freecodecampLogo} className='freecodecamp-logo'></img>
      </div>
      <div className='to-do-list'>
        <h1>To Do</h1>
        <List />
      </div>
    </div>
  );
}

export default App;
