// Import Styles

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components

import Header from './components/header/header';
import Projects	 from './components/projects/projects';

function App() {
  return (
    <div className="App">

      <Header />

      <Projects />
      
    </div>
  );
}

export default App;
