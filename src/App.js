import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import FilterButton from './components/FilterButton';
import Todo from "./components/Todo";



function App(props) {

  const taskList = props.tasks.map((task) => 
                                      <Todo
                                        id={task.id}
                                        name={task.name}
                                        completed={task.completed}
                                        key={task.id}
                                        />);
                                        
   function addTask(inherit) {
     alert(inherit);
   }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addtask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
          {taskList}
        {/* <Todo name="Eat" completed={true} id="1"/>
        <Todo name="Sleep" completed={false} id="2" />
        <Todo name="Repeat" completed={true} id="3" /> */}
      </ul>
    </div>
  );
}

export default App;
