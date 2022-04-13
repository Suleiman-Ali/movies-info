import { prefixImg } from '../apis';
import { Picture } from '../data';

interface PosterProps {
  pic: Picture;
}

function Poster({ pic }: PosterProps): JSX.Element {
  return (
    <div className="pictureDetails__posterBox">
      <img
        className="pictureDetails__poster"
        src={prefixImg(pic.poster_path)}
        alt=""
      />
      <p className="pictureDetails__rate">{pic.vote_average}</p>
    </div>
  );
}

export default Poster;
