import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { prefixImg } from '../apis';
import { Picture } from '../data';
import Spinner from './Spinner';

interface PictureProps {
  picTo: string;
  pic: Picture;
}

function PictureComponent({ pic, picTo }: PictureProps): JSX.Element {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);

  const onClick = () => navigate(`${picTo}/${pic.id}`, { state: pic });
  const notLoadedHide = !loaded ? 'hide' : '';
  const LoadedHide = loaded ? 'hide' : '';

  return (
    <div className={`picture`}>
      <img
        className={`picture__img ${notLoadedHide}`}
        src={prefixImg(pic.poster_path)}
        alt={pic.original_name || pic.title}
        onClick={onClick}
        onLoad={() => setLoaded(true)}
      />

      <p className={`picture__title ${notLoadedHide}`} onClick={onClick}>
        {pic.original_name || pic.title}
      </p>

      <p className={`picture__rate ${notLoadedHide}`} onClick={onClick}>
        {pic.vote_average}
      </p>

      <Spinner cls={LoadedHide + ' margin-top-bottom-10'} />
    </div>
  );
}

export default PictureComponent;
