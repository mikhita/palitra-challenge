import React from 'react';
import { Link} from 'react-router-dom';
import Main from './components/Main';




const App = () => {
  

  

  return (
    <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
        <hr />
        <Main />          
    </div>
  );
};

export default App;