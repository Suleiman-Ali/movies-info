import Home from './Pages/Home';
import MoviePage from './Pages/MoviePage';
import SeriesPage from './Pages/SeriesPage';
import PopularMovies from './Pages/PopularMovies';
import TopMovies from './Pages/TopMovies';
import PopularSeries from './Pages/PopularSeries';
import TopSeries from './Pages/TopSeries';
import {
  POPULAR_MOVIES_PATHS,
  TOP_MOVIES_PATHS,
  POPULAR_SERIES_PATHS,
  TOP_SERIES_PATHS,
} from '../data/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    // prettier-ignore
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={POPULAR_MOVIES_PATHS.typeTo} element={<PopularMovies />}/>
          <Route path={TOP_MOVIES_PATHS.typeTo} element={<TopMovies />} />
          <Route path={POPULAR_SERIES_PATHS.typeTo} element={<PopularSeries />} />
          <Route path={TOP_SERIES_PATHS.typeTo} element={<TopSeries />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/tv/:id" element={<SeriesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// TODO: Error Handling => commit
// TODO: Smiler Movies => commit
// TODO: Improve Quality, Styles => commit
// TODO: Refactoring => commit
