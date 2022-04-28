import { useNavigate } from 'react-router-dom';
import { filterByMethod, Picture, sortByMethod } from '../data';
import { prefixImg } from '../apis';
import PictureItem from './PictureItem';

interface PicturesGridProps {
  pics: Picture[];
  filterBy: string;
  sortBy: string;
  sortingOrder: string;
  picTo: string;
  cls?: string;
}

function PicturesGrid({
  pics,
  filterBy,
  sortBy,
  sortingOrder,
  picTo,
  cls,
}: PicturesGridProps): JSX.Element | null {
  let arr = sortByMethod(
    filterByMethod(pics, filterBy),
    sortBy,
    sortingOrder
  ).filter((pic) => pic.poster_path);

  if (arr.length > 0)
    return (
      <div className={`picturesGrid ${cls}`}>
        {arr.map((pic) => (
          <PictureItem pic={pic} picTo={picTo} key={pic.id} />
        ))}
      </div>
    );

  return null;
}

export default PicturesGrid;
