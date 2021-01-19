import './App.css';
import Welcome from './Components/Welcome/Welcome.js';
import Clock from './Components/Clock/Cliock.js';
import Contact from './Contact'
function App() {
  return (
    <div className="App">
      <Welcome name="Ajike"/>
      <Clock />
    </div>
  );
}

export default App;
