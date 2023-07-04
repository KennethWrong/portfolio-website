import { BrowserRouter, Route, Routes, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="w-full">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={ 
                <Home />
              } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
