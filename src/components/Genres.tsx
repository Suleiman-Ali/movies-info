import Context from '../context';
import { useContext } from 'react';
import { Picture } from '../data';
import GenreComponent from './GenreComponent';

interface GenresProps {
  pic: Picture;
}

function Genres({ pic }: GenresProps): JSX.Element {
  const { genres } = useContext(Context);
  const pictureGenres = genres.filter((g) => pic.genre_ids.includes(g.id));
  const included: number[] = [];

  return (
    <div className="pictureDetails__genres">
      {pictureGenres.slice(0, 4).map((genre) => {
        if (included.includes(genre.id)) return null;
        included.push(genre.id);
        return <GenreComponent genre={genre} key={genre.id} />;
      })}
    </div>
  );
}
export default Genres;
