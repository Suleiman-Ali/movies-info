import CastComponent from './CastComponent';
import { Cast } from '../data';

interface CastsProps {
  casts: Cast[];
}

function Casts({ casts }: CastsProps): JSX.Element | null {
  if (casts.length <= 0) return null;

  return (
    <div className="pictureDetails__casts">
      {casts
        .slice(0, 6)
        .map(
          (cast) =>
            cast.profile_path && <CastComponent cast={cast} key={cast.id} />
        )}
    </div>
  );
}
export default Casts;
