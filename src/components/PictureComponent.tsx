import Spinner from './Spinner';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { prefixSmallImg } from '../apis';
import { Picture } from '../data';

interface PictureComponentProps {
  picTo: string;
  pic: Picture;
  replace: boolean;
  loaderCls: string;
  onClick?: () => void;
}

function PictureComponent({
  pic,
  picTo,
  onClick,
  replace,
  loaderCls,
}: PictureComponentProps): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);
  const notLoadedHide = !loaded ? 'hide' : '';
  const LoadedHide = `${loaded ? 'hide' : ''} ${loaderCls}`;
  const { id, poster_path, original_name, title, vote_average } = pic;

  return (
    <Link
      className={`picture`}
      to={`${picTo}/${id}`}
      replace={replace}
      state={pic}
      onClick={onClick}
    >
      <img
        className={`picture__img ${notLoadedHide}`}
        src={prefixSmallImg(poster_path)}
        alt={original_name || title}
        onLoad={() => setLoaded(true)}
      />

      <p className={`picture__title ${notLoadedHide}`}>
        {original_name || title}
      </p>

      <p className={`picture__rate ${notLoadedHide}`}>
        {(+vote_average).toFixed(1)}
      </p>

      <Spinner cls={LoadedHide} />
    </Link>
  );
}

export default PictureComponent;
