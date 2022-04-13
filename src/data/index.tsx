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

export type MovieDetails = {
  original_language: string;
  release_date: string;
  runtime: number;
};

export type SeriesDetails = {
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
