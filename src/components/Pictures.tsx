import Context from '../context';
import PictureComponent from './PictureComponent';
import TitleBox from './TitleBox';
import { useContext } from 'react';
import { Picture } from '../data';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

interface PicturesProps {
  arr: Picture[];
  title: string;
  picTo: string;
  typeTo: string;
}

function Pictures({
  arr,
  title,
  picTo,
  typeTo,
}: PicturesProps): JSX.Element | null {
  const { numberOfSlides } = useContext(Context);

  return (
    <div className={`PicturesBox`}>
      <TitleBox title={title} typeTo={typeTo} />

      <Swiper
        slidesPerView={numberOfSlides}
        modules={[Navigation]}
        spaceBetween={15}
        className="pictures"
      >
        {arr.map(
          (pic) =>
            pic.poster_path && (
              <SwiperSlide key={pic.id}>
                <PictureComponent pic={pic} picTo={picTo} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}

export default Pictures;
