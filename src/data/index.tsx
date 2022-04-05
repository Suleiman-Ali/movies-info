export type Genre = { id: number; name: string };

export type Picture = {
  genres: Genre[];
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  original_language: string;
  status: string;
  vote_average: string;
  release_date: string;
};
