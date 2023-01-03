import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { HomePage } from './homePage/homePage';
import { News } from './news/news';
import { News1 } from './newsComponent/News/news_1';
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
          <Route path='/blog' element={<Blog />} />
          {
            // Route for news componets
            <Route path='/news/:news_id' element={<News1 />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
