import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './homePage/homePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate replace to='/project' />} />
          <Route path='/project' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
