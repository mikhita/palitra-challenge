import { Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import Topics from './Topics';
import Settings from './Setting';

const Main = () => {


return (         
  <div>
    <Routes>
      <Route path='/' element={<Posts/>} />
      <Route path='/topics' element={<Topics/>} />
      <Route path='/settings' element={<Settings/>} />
    </Routes>

  </div>

);
}
export default Main;