// import logo from './logo.svg';
import './App.css';
import TodoParent from './Components/TodoParent';
import TodoHeader from './Components/TodoHeader';
import Login from './Components/Login';
import Parent from './Components/Parent';
import Controlled from './Components/Controlled';
import Notcontrolled from './Components/Notcontrolled';
import DomRouter from './Components/DomRouter'
function App() {
  return (
    <div>
      <Controlled/>
      <Notcontrolled/>
      <DomRouter/>
      {/* <Parent/> */}
      {/* <TodoParent/> */}
    </div>
  );
}

export default App;
