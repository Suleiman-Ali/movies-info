import PictureComponent from './PictureComponent';
import { filterByMethod, Picture, sortByMethod } from '../data';

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

  if (arr.length <= 0) return null;

  return (
    <div className={`picturesGrid ${cls}`}>
      {arr.map((pic) => (
        <PictureComponent
          key={pic.id}
          pic={pic}
          picTo={picTo}
          replace={false}
          loaderCls="margin-all-10"
        />
      ))}
    </div>
  );
}

export default PicturesGrid;
