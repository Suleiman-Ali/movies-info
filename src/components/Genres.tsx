import Context from '../context';
import { useContext } from 'react';
import { Picture } from '../data';

interface GenresProps {
  pic: Picture;
}

function Genres({ pic }: GenresProps): JSX.Element | null {
  const { genres } = useContext(Context);
  const pictureGenres = genres.filter((g) => pic.genre_ids.includes(g.id));
  const included: number[] = [];

  if (pictureGenres.length <= 0) return null;

  return (
    <div className="pictureDetails__genres">
      {pictureGenres.slice(0, 4).map((genre) => {
        if (included.includes(genre.id)) return null;
        included.push(genre.id);
        return (
          <p className="pictureDetails__genre" key={genre.id}>
            {genre.name}
          </p>
        );
      })}
    </div>
  );
}
export default Genres;
