import api, { endpoint } from '../apis/index';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Genre, Picture, getNumberOfSlides } from '../data/index';
interface ProviderProps {
  children: ReactNode;
}

interface ContextValues {
  genres: Genre[];
  topMovies: Picture[];
  topSeries: Picture[];
  popularMovies: Picture[];
  popularSeries: Picture[];
  numberOfSlides: number;
}

const Context = createContext<ContextValues>(undefined!);
export default Context;

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [genres, setGenres] = useState<Genre[]>([]);
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
      const movies_p = (await api.get(endpoint('/movie/popular'))).data.results;
      setPopularMovies(movies_p);
    })();
  }, []);

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const movies_t = (await api.get(endpoint('/movie/top_rated'))).data.results;
      setTopMovies(movies_t);
    })();
  }, []);

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const series_p = (await api.get(endpoint('/tv/popular'))).data.results;
      setPopularSeries(series_p);
    })();
  }, []);

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const series_t = (await api.get(endpoint('/tv/top_rated'))).data.results;
      setTopSeries(series_t);
    })();
  }, []);

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const movies_g = (await api.get(endpoint('/genre/movie/list'))).data.genres;
      const series_g = (await api.get(endpoint('/genre/tv/list'))).data.genres;
      const all_genres = [...movies_g, ...series_g];
      setGenres(all_genres);
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        genres,
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
