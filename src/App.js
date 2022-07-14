import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Display from './components/display';
import Word from './components/word';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Display/>}/>
        <Route path="/:word" element={<Word />}/>
        <Route path="/:word/:color" element={<Word />}/>
        <Route path="/:word/:color/:bgcolor" element={<Word />}/>
      </Routes>
    </div>
  );
}

export default App;
