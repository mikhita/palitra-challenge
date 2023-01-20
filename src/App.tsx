import React from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main';




const App = () => {
  

  

  return (
    <div className=' flex flex-col justify-center align-middle text-center'>
        <ul className=' flex flex-row justify-center align-middle bg-blue-700 text-fuchsia-50 text-3xl  '>
          <li><Link className=' border-fuchsia-700 rounded-sm ' to='/'>Posts</Link></li>
        </ul>   
        <Main/>       
    </div>
  );
};

export default App;