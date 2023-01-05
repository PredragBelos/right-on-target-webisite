import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { HomePage } from './homePage/homePage';
import { News } from './news/news';
import { News1 } from './newsComponent/news_1';
import { News2 } from './newsComponent/news_2';
import { News3 } from './newsComponent/news_3';
import { News4 } from './newsComponent/news_4';
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
          
          {<Route path='/news/1' element={<News1 />} />}
          {<Route path='/news/2' element={<News2 />} />}
          {<Route path='/news/3' element={<News3 />} />}
          {<Route path='/news/4' element={<News4 />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
