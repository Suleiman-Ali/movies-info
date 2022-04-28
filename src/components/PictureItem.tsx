import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { prefixImg } from '../apis';
import { Picture } from '../data';
import Spinner from './Spinner';

interface PictureItemProps {
  pic: Picture;
  picTo: string;
}

function PictureItem({ pic, picTo }: PictureItemProps): JSX.Element {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);
  const notLoadedHide = !loaded ? 'hide' : '';
  const onClick = () => navigate(`${picTo}/${pic.id}`, { state: pic });

  return (
    <div className="pictureItem" key={pic.id}>
      <img
        className={`pictureItem__img ${notLoadedHide}`}
        src={prefixImg(pic.poster_path)}
        alt={pic.original_name || pic.title}
        onLoad={() => setLoaded(true)}
        onClick={onClick}
      />
      <p className={`pictureItem__title ${notLoadedHide}`} onClick={onClick}>
        {pic.original_name || pic.title}
      </p>
      <p className={`pictureItem__rate ${notLoadedHide}`} onClick={onClick}>
        {pic.vote_average}
      </p>

      {!loaded && (
        <div className="spinnerBox">
          <Spinner cls="margin-all-10" />
        </div>
      )}
    </div>
  );
}

export default PictureItem;
