import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Contact } from './contact/contact';
import { HomePage } from './homePage/homePage';
import { News } from './news/news';
import { Team } from './team/team';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate replace to='/project' />} />
          <Route path='/project' element={<HomePage />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
