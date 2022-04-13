import { useContext } from 'react';
import { prefixVideo } from '../apis';
import Context from '../context';

function Trailer(): JSX.Element | null {
  const { trailer } = useContext(Context);

  if (!trailer) return null;

  return (
    <div className="picturePage__trailerBox">
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
