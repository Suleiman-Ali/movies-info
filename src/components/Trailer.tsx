import { prefixVideo } from '../apis';
import { Video } from '../data';

interface TrailerProps {
  trailer: Video | undefined;
  cls: string;
}

function Trailer({ trailer, cls }: TrailerProps): JSX.Element | null {
  console.log(trailer?.key);

  if (!trailer) return null;

  return (
    <div className={`picturePage__trailerBox ${cls}`}>
      <p className="picturePage__trailerTitle">{trailer.name}</p>
      <iframe
        src={prefixVideo(trailer.key)}
        title={trailer.key}
        className="picturePage__trailerVideo"
      />
    </div>
  );
}

export default Trailer;
