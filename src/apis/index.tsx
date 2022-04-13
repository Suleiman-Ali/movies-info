import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const endpoint = (ep: string): string =>
  `${ep}?api_key=3ec4d8d0f832d2541e0951a665871b6b`;

export const prefixImg = (path: string): string =>
  `https://image.tmdb.org/t/p/original/${path}`;

export const prefixVideo = (path: string): string =>
  `https://www.youtube.com/embed/${path}`;
