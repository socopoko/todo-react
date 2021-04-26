import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

/*
  Todo Features: 
  1. add todo
  2. display todo
  3. cross off todo
  4. show number of active todos
  5. filter  all/active/complete
  6. delete todo
  7. delete all complete 
    7.1 only show if atleast one is complete
  8. button  to toggle all on/off
*/

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1>ToDo</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
