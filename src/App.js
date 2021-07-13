import './App.css';
import me from './assets/old-me.jpg'

function App() {
  return (
    <div className="App">
      <h1>My React Page</h1>
      <h2>Adrian Diaz</h2>
      <img src={me} alt='My Profile Img' />
    </div>
  );
}

export default App;
