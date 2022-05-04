import { prefixMediumImg } from '../apis';
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
        src={prefixMediumImg(pic.poster_path)}
        alt=""
        onLoad={frontLoadedHandler}
      />
      <p className="pictureDetails__rate">{(+pic.vote_average).toFixed(1)}</p>
    </div>
  );
}

export default Poster;
