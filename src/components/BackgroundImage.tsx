import { prefixImg } from '../apis';
import { Picture } from '../data';

interface BackgroundImageProps {
  pic: Picture;
  cls: string;
  backLoadedHandler: () => void;
}

function BackgroundImage({
  pic,
  backLoadedHandler,
  cls,
}: BackgroundImageProps): JSX.Element {
  return (
    <div className={`picturePage__imgContainer ${cls}`}>
      <img
        className="picturePage__img"
        src={prefixImg(pic.backdrop_path)}
        alt=""
        onLoad={backLoadedHandler}
      />
      <div className="picturePage__overlay"></div>
    </div>
  );
}

export default BackgroundImage;
