import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const endpoint = (ep: string, page: number = 1): string =>
  `${ep}?api_key=API_KEY&page=${page}`;

export const endPointWithQuery = (
  ep: string,
  query: string,
  page: number = 1
): string => `${ep}?api_key=API_KEY&query=${query}&page=${page}`;

export const prefixSmallImg = (path: string): string =>
  `https://image.tmdb.org/t/p/w300/${path}`;

export const prefixMediumImg = (path: string): string =>
  `https://image.tmdb.org/t/p/w400/${path}`;

export const prefixImgOriginal = (path: string): string =>
  `https://image.tmdb.org/t/p/original/${path}`;

export const prefixVideo = (path: string): string =>
  `https://www.youtube.com/embed/${path}`;
