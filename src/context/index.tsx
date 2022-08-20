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
    (async () => {
      const allData = await Promise.all([
        api.get(endpoint('/movie/popular')),
        api.get(endpoint('/movie/top_rated')),
        api.get(endpoint('/tv/popular')),
        api.get(endpoint('/tv/top_rated')),
        api.get(endpoint('/genre/movie/list')),
        api.get(endpoint('/genre/tv/list')),
      ]);
      setPopularMovies(allData[0].data.results);
      setTopMovies(allData[1].data.results);
      setPopularSeries(allData[2].data.results);
      setTopSeries(allData[3].data.results);
      setGenres([...allData[4].data.genres, ...allData[5].data.genres]);
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
