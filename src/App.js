// Import Styles

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

// Import Components

import Header from './components/header/header';
import Projects	 from './components/projects/projects';
import Photo from './components/photo/photo';
import Description from './components/description/description';

function App() {
  return (
    <div className="App">

      <Header />

      <Row id="mainRow">

        <Photo />

        <Description />

      </Row>

      <Projects />
      
    </div>
  );
}

export default App;
