import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Cloud from './components/UI/Cloud';

function App() {
  const cloudColors = [
    {front: 'white'},
    {mid: 'lightPurple'},
    {back: 'darkPurple'}
  ]

  return (
    <Router>
      {/* <Welcome /> */}
      <Cloud cloudColors={cloudColors} />
    </Router>
  );
}

export default App;
