import Home from './Pages/Home';
import AllPictures from './Pages/AllPictures';
import Context from '../context';
import PicturePage from './Pages/PicturePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useState } from 'react';
import {
  POPULAR_MOVIES_PATHS,
  TOP_MOVIES_PATHS,
  POPULAR_SERIES_PATHS,
  TOP_SERIES_PATHS,
  getSetter,
} from '../data/index';

function App(): JSX.Element {
  const { popularMovies, topMovies, popularSeries, topSeries } =
    useContext(Context);
  const [movieKey, setMovieKey] = useState<number>(Math.random());
  const [tvKey, setTvKey] = useState<number>(Math.random());

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={POPULAR_MOVIES_PATHS.typeTo}
            element={
              <AllPictures
                arr={popularMovies}
                picTo={POPULAR_MOVIES_PATHS.picTo}
                typeTo={POPULAR_MOVIES_PATHS.typeTo}
                searchTo={POPULAR_MOVIES_PATHS.searchTo}
                key={Math.random()}
              />
            }
          />
          <Route
            path={TOP_MOVIES_PATHS.typeTo}
            element={
              <AllPictures
                arr={topMovies}
                picTo={TOP_MOVIES_PATHS.picTo}
                typeTo={TOP_MOVIES_PATHS.typeTo}
                searchTo={TOP_MOVIES_PATHS.searchTo}
                key={Math.random()}
              />
            }
          />
          <Route
            path={POPULAR_SERIES_PATHS.typeTo}
            element={
              <AllPictures
                arr={popularSeries}
                picTo={POPULAR_SERIES_PATHS.picTo}
                typeTo={POPULAR_SERIES_PATHS.typeTo}
                searchTo={POPULAR_SERIES_PATHS.searchTo}
                key={Math.random()}
              />
            }
          />
          <Route
            path={TOP_SERIES_PATHS.typeTo}
            element={
              <AllPictures
                arr={topSeries}
                picTo={TOP_SERIES_PATHS.picTo}
                typeTo={TOP_SERIES_PATHS.typeTo}
                searchTo={TOP_SERIES_PATHS.searchTo}
                key={Math.random()}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={
              <PicturePage
                key={movieKey}
                to="/movie"
                setter={getSetter(setMovieKey)}
              />
            }
          />
          <Route
            path="/tv/:id"
            element={
              <PicturePage key={tvKey} to="/tv" setter={getSetter(setTvKey)} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
