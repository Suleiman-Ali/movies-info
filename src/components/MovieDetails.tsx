import { getDuration, MovieDetailsType } from '../data';
import Detail from './Detail';

interface MovieDetailsProps {
  movieDetails: MovieDetailsType | undefined;
}

function MovieDetails({ movieDetails }: MovieDetailsProps): JSX.Element | null {
  if (!movieDetails) return null;

  return (
    <div className="pictureDetails__details">
      {movieDetails.original_language && (
        <Detail text={movieDetails.original_language.toUpperCase()} />
      )}
      {movieDetails.release_date && (
        <Detail text={movieDetails.release_date.replaceAll('-', '/')} />
      )}
      {movieDetails.runtime && (
        <Detail text={getDuration(movieDetails.runtime)} />
      )}
    </div>
  );
}

export default MovieDetails;
