import Context from '../context';
import { useContext } from 'react';
import Detail from './Detail';

function SeriesDetails(): JSX.Element | null {
  const { seriesDetails } = useContext(Context);

  if (!seriesDetails) return null;

  return (
    <div className="pictureDetails__details">
      <Detail text={seriesDetails.original_language.toUpperCase()} />
      <Detail text={seriesDetails.first_air_date.replaceAll('-', '/')} />
      <Detail text={`${seriesDetails.number_of_seasons} seasons`} />
      <Detail text={`${seriesDetails.number_of_episodes} episodes`} />
    </div>
  );
}

export default SeriesDetails;
