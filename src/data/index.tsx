export type Genre = { id: number; name: string };

export type Picture = {
  genres: Genre[];
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
