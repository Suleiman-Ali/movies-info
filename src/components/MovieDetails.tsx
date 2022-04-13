import Context from '../context';
import { useContext } from 'react';
import { getDuration } from '../data';
import Detail from './Detail';

function MovieDetails(): JSX.Element | null {
  const { movieDetails } = useContext(Context);

  if (!movieDetails) return null;

  return (
    <div className="pictureDetails__details">
      <Detail text={movieDetails.original_language.toUpperCase()} />
      <Detail text={movieDetails.release_date.replaceAll('-', '/')} />
      <Detail text={getDuration(movieDetails.runtime)} />
    </div>
  );
}

export default MovieDetails;
