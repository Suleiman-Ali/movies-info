import { Cast } from '../data';
import { prefixImg } from '../apis';

interface CastProps {
  cast: Cast;
}

function CastComponent({ cast }: CastProps): JSX.Element {
  return (
    <div className="pictureDetails__cast">
      <img
        className="pictureDetails__castImg"
        src={prefixImg(cast.profile_path)}
        alt=""
      />
      <p className="pictureDetails__castName">{cast.original_name}</p>
    </div>
  );
}

export default CastComponent;
