import { HashRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar';
import Steps from '../Steps';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Steps />
    </Router>
  );
};

export default App;
