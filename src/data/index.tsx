export type Genre = { id: number; name: string };

export type Picture = {
  genre_ids: number[];
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  original_name: string;
  original_language: string;
  status: string;
  vote_average: string;
  release_date: string;
  id: number;
};

export type Cast = {
  id: number;
  character: string;
  original_name: string;
  profile_path: string;
};

export type Video = {
  id: string;
  key: string;
  name: string;
  type: string;
};

export type MovieDetailsType = {
  original_language: string;
  release_date: string;
  runtime: number;
};

export type SeriesDetailsType = {
  number_of_seasons: number;
  number_of_episodes: number;
  original_language: string;
  first_air_date: string;
};

export const getNumberOfSlides = (innerWidth: number): number => {
  if (innerWidth > 1800) return 8.5;
  if (innerWidth > 1600) return 7.5;
  if (innerWidth > 1300) return 6.5;
  if (innerWidth > 1000) return 5.5;
  if (innerWidth > 800) return 4.5;
  if (innerWidth > 600) return 3.5;
  if (innerWidth > 400) return 2.25;
  if (innerWidth > 300) return 1.25;
  return 1;
};

export const getHours = (min: number): string =>
  `${min / 60}`.split('.')[0].padStart(2, '0');

export const getMinutes = (min: number): string =>
  (+`0.${`${min / 60}`.split('.')[1]}` * 60).toFixed(0).padStart(2, '0');

export const getDuration = (min: number): string =>
  `${getHours(min)}:${getMinutes(min)}`;

export function filterByMethod(array: Picture[], method: string): Picture[] {
  if (method === '-') return array;
  if (method === 'Action')
    return array.filter((pic) => pic.genre_ids.includes(28));
  if (method === 'Comedy')
    return array.filter((pic) => pic.genre_ids.includes(35));
  if (method === 'Thriller')
    return array.filter((pic) => pic.genre_ids.includes(53));
  if (method === 'Drama')
    return array.filter((pic) => pic.genre_ids.includes(18));
  return array;
}

export function sortByMethod(
  array: Picture[],
  method: string,
  order: string
): Picture[] {
  if (method === '-') return array;

  const arr = [...array];

  if (method === 'Title' && order === 'AS')
    return arr.sort((a, b) =>
      (a.original_name || a.title).localeCompare(b.original_name || b.title)
    );

  if (method === 'Title' && order === 'DS')
    return arr
      .sort((a, b) =>
        (a.original_name || a.title).localeCompare(b.original_name || b.title)
      )
      .reverse();

  if (method === 'Rate' && order === 'AS')
    return arr.sort((a, b) => +a.vote_average - +b.vote_average);

  if (method === 'Rate' && order === 'DS')
    return arr.sort((a, b) => +b.vote_average - +a.vote_average);

  return arr;
}

export const POPULAR_MOVIES_PATHS = {
  picTo: '/movie',
  typeTo: '/movie/popular',
  searchTo: 'search/movie/',
};

export const TOP_MOVIES_PATHS = {
  picTo: '/movie',
  typeTo: '/movie/top_rated',
  searchTo: 'search/movie/',
};

export const POPULAR_SERIES_PATHS = {
  picTo: '/tv',
  typeTo: '/tv/popular',
  searchTo: 'search/tv/',
};

export const TOP_SERIES_PATHS = {
  picTo: '/tv',
  typeTo: '/tv/top_rated',
  searchTo: 'search/tv/',
};

export const WAIT_TIME = 1000;
