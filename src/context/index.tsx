import { createContext, ReactNode, useEffect, useState } from 'react';
import api, { endpoint } from '../apis/index';
import { Genre, Picture } from '../data/index';

interface ProviderProps {
  children: ReactNode;
}

interface ContextValues {}

const Context = createContext<ContextValues>(!undefined);
export default Context;

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [moviesGenres, setMoviesGenres] = useState<Genre[]>([]);
  const [seriesGenres, setSeriesGenres] = useState<Genre[]>([]);
  const [topMovies, setTopMovies] = useState<Picture[]>([]);
  const [topSeries, setTopSeries] = useState<Picture[]>([]);
  const [popularMovies, setPopularMovies] = useState<Picture[]>([]);
  const [popularSeries, setPopularSeries] = useState<Picture[]>([]);

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
      setTopMovies(movies_p);
      setTopSeries(movies_t);
      setPopularMovies(series_p);
      setPopularSeries(series_t);
    })();
  }, []);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
