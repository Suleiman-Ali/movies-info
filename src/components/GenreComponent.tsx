import { Genre } from '../data';

interface GenreProps {
  genre: Genre;
}

function GenreComponent({ genre }: GenreProps): JSX.Element {
  return <p className="pictureDetails__genre">{genre.name}</p>;
}

export default GenreComponent;
