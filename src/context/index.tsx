import api, { endpoint } from '../apis/index';
import { createContext, ReactNode, useEffect, useState } from 'react';
import {
  Genre,
  Picture,
  getNumberOfSlides,
  Cast,
  Video,
  SeriesDetails,
  MovieDetails,
} from '../data/index';

interface ProviderProps {
  children: ReactNode;
}

interface ContextValues {
  genres: Genre[];
  topMovies: Picture[];
  topSeries: Picture[];
  popularMovies: Picture[];
  popularSeries: Picture[];
  casts: Cast[];
  trailer: Video | undefined;
  numberOfSlides: number;
  seriesDetails: SeriesDetails | undefined;
  movieDetails: MovieDetails | undefined;
  castSetter: (casts: Cast[]) => void;
  trailerSetter: (trailer: Video) => void;
  movieDetailsSetter: (movieDetails: MovieDetails) => void;
  seriesDetailsSetter: (seriesDetails: SeriesDetails) => void;
}

const Context = createContext<ContextValues>(undefined!);
export default Context;

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [topMovies, setTopMovies] = useState<Picture[]>([]);
  const [topSeries, setTopSeries] = useState<Picture[]>([]);
  const [popularMovies, setPopularMovies] = useState<Picture[]>([]);
  const [popularSeries, setPopularSeries] = useState<Picture[]>([]);
  const [casts, setCasts] = useState<Cast[]>([]);
  const [trailer, setTrailer] = useState<Video | undefined>();
  const [seriesDetails, setSeriesDetails] = useState<
    SeriesDetails | undefined
  >();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | undefined>();
  const [numberOfSlides, setNumberOfSlides] = useState<number>(
    getNumberOfSlides(window.innerWidth)
  );

  const castSetter = (casts: Cast[]): void => setCasts(casts);
  const trailerSetter = (trailer: Video): void => setTrailer(trailer);
  const movieDetailsSetter = (movieDetails: MovieDetails): void =>
    setMovieDetails(movieDetails);
  const seriesDetailsSetter = (seriesDetails: SeriesDetails): void =>
    setSeriesDetails(seriesDetails);

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
      const movies_t = (await api.get(endpoint('/movie/top_rated'))).data.results;
      const series_p = (await api.get(endpoint('/tv/popular'))).data.results;
      const series_t = (await api.get(endpoint('/tv/top_rated'))).data.results;
      const movies_g = (await api.get(endpoint('/genre/movie/list'))).data.genres;
      const series_g = (await api.get(endpoint('/genre/tv/list'))).data.genres;
      const all_genres = [...movies_g, ...series_g];
      setPopularMovies(movies_p);
      setTopMovies(movies_t);
      setPopularSeries(series_p);
      setTopSeries(series_t);
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
        movieDetails,
        seriesDetails,
        casts,
        trailer,
        movieDetailsSetter,
        seriesDetailsSetter,
        castSetter,
        trailerSetter,
      }}
    >
      {children}
    </Context.Provider>
  );
}
