import Context from '../context';
import CastComponent from './CastComponent';
import { useContext } from 'react';

function Casts(): JSX.Element | null {
  const { casts } = useContext(Context);

  if (!casts) return null;

  return (
    <div className="pictureDetails__casts">
      {casts.slice(0, 6).map((cast) => (
        <CastComponent cast={cast} key={cast.id} />
      ))}
    </div>
  );
}
export default Casts;
