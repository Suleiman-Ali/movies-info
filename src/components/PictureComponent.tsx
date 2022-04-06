import { prefixImg } from '../apis';
import { Picture } from '../data';

interface PictureProps {
  pic: Picture;
}

function PictureComponent({ pic }: PictureProps): JSX.Element {
  return (
    <>
      <img
        className="picture__img"
        src={prefixImg(pic.poster_path)}
        alt={pic.original_name || pic.title}
      />
      <p className="picture__title">{pic.original_name || pic.title}</p>
      <p className="picture__rate">{pic.vote_average}</p>
    </>
  );
}

export default PictureComponent;
