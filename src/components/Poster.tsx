import { prefixImg } from '../apis';
import { Picture } from '../data';

interface PosterProps {
  pic: Picture;
  frontLoadedHandler: () => void;
}

function Poster({ pic, frontLoadedHandler }: PosterProps): JSX.Element {
  return (
    <div className="pictureDetails__posterBox">
      <img
        className="pictureDetails__poster"
        src={prefixImg(pic.poster_path)}
        alt=""
        onLoad={frontLoadedHandler}
      />
      <p className="pictureDetails__rate">{pic.vote_average}</p>
    </div>
  );
}

export default Poster;
