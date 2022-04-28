import Detail from './Detail';
import { SeriesDetailsType } from '../data';

interface SeriesDetailsProps {
  seriesDetails: SeriesDetailsType | undefined;
}

function SeriesDetails({
  seriesDetails,
}: SeriesDetailsProps): JSX.Element | null {
  if (!seriesDetails) return null;

  return (
    <div className="pictureDetails__details">
      {seriesDetails.original_language && (
        <Detail text={seriesDetails.original_language.toUpperCase()} />
      )}
      {seriesDetails.first_air_date && (
        <Detail text={seriesDetails.first_air_date.replaceAll('-', '/')} />
      )}
      {seriesDetails.number_of_seasons && (
        <Detail text={`${seriesDetails.number_of_seasons} seasons`} />
      )}
      {seriesDetails.number_of_episodes && (
        <Detail text={`${seriesDetails.number_of_episodes} episodes`} />
      )}
    </div>
  );
}

export default SeriesDetails;
