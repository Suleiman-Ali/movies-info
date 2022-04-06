import { createContext, ReactNode, useEffect, useState } from 'react';
import api, { endpoint } from '../apis/index';
import { Genre, Picture, getNumberOfSlides } from '../data/index';

interface ProviderProps {
  children: ReactNode;
}

interface ContextValues {
  moviesGenres: Genre[];
  seriesGenres: Genre[];
  topMovies: Picture[];
  topSeries: Picture[];
  popularMovies: Picture[];
  popularSeries: Picture[];
  numberOfSlides: number;
}

const Context = createContext<ContextValues>(undefined!);
export default Context;

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [moviesGenres, setMoviesGenres] = useState<Genre[]>([]);
  const [seriesGenres, setSeriesGenres] = useState<Genre[]>([]);
  const [topMovies, setTopMovies] = useState<Picture[]>([]);
  const [topSeries, setTopSeries] = useState<Picture[]>([]);
  const [popularMovies, setPopularMovies] = useState<Picture[]>([]);
  const [popularSeries, setPopularSeries] = useState<Picture[]>([]);
  const [numberOfSlides, setNumberOfSlides] = useState<number>(
    getNumberOfSlides(window.innerWidth)
  );

  useEffect(() => {
    const onResize = (e: any) =>
      setNumberOfSlides(getNumberOfSlides(e.target.innerWidth));
    window.addEventListener<'resize'>('resize', onResize);
    return () => window.removeEventListener<'resize'>('resize', onResize);
  }, []);

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const movies_g = (await api.get(endpoint('/genre/movie/list'))).data;
      const series_g = (await api.get(endpoint('/genre/tv/list'))).data;
      const movies_p = (await api.get(endpoint('/movie/popular'))).data.results;
      const movies_t = (await api.get(endpoint('/movie/top_rated'))).data.results;
      const series_p = (await api.get(endpoint('/tv/popular'))).data.results;
      const series_t = (await api.get(endpoint('/tv/top_rated'))).data.results;
      setMoviesGenres(movies_g);
      setSeriesGenres(series_g);
      setTopMovies(movies_t);
      setPopularMovies(movies_p);
      setTopSeries(series_t);
      setPopularSeries(series_p);
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        moviesGenres,
        seriesGenres,
        popularMovies,
        popularSeries,
        topMovies,
        topSeries,
        numberOfSlides,
      }}
    >
      {children}
    </Context.Provider>
  );
}
