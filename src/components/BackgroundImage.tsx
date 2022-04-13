import { prefixImg } from '../apis';
import { Picture } from '../data';

interface BackgroundImageProps {
  pic: Picture;
}

function BackgroundImage({ pic }: BackgroundImageProps): JSX.Element {
  return (
    <div className="picturePage__imgContainer">
      <img
        className="picturePage__img"
        src={prefixImg(pic.backdrop_path)}
        alt=""
      />
      <div className="picturePage__overlay"></div>
    </div>
  );
}

export default BackgroundImage;
