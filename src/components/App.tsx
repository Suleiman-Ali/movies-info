import Home from './Pages/Home';
import Movies from './Pages/Movies';
import PicturePage from './Pages/PicturePage';
import Series from './Pages/Series';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/picture/:id" element={<PicturePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
