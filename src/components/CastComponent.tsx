import Spinner from './Spinner';
import { Cast } from '../data';
import { prefixSmallImg } from '../apis';
import { useState } from 'react';

interface CastProps {
  cast: Cast;
}

function CastComponent({ cast }: CastProps): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);
  const notLoadedHide = !loaded ? 'hide' : '';

  return (
    <div className={`pictureDetails__cast`}>
      <img
        className={`pictureDetails__castImg ${notLoadedHide}`}
        src={prefixSmallImg(cast.profile_path)}
        alt=""
        onLoad={() => setLoaded(true)}
      />
      <p className={`pictureDetails__castName ${notLoadedHide}`}>
        {cast.original_name}
      </p>

      {!loaded && (
        <div className="spinnerBox">
          <Spinner cls="margin-top-bottom-2-5" />
        </div>
      )}
    </div>
  );
}

export default CastComponent;
