import './App.css';
import Header from './components/Header/index'
import Home from './components/Home/index'

function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      {/* HEADER */}
      <Header />
      {/* HOME */}
      <Home />
    </div>
  );
}

export default App;
