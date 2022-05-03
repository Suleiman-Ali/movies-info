import Context from '../context';
import PictureComponent from './PictureComponent';
import { useContext } from 'react';
import { Picture } from '../data';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

interface SimilarPicturesProps {
  arr: Picture[];
  currentPicture: Picture;
  picTo: string;
  pictureClickHandler: () => void;
}

function SimilarPictures({
  arr,
  currentPicture,
  pictureClickHandler,
  picTo,
}: SimilarPicturesProps): JSX.Element | null {
  const { numberOfSlides } = useContext(Context);

  if (arr.length <= 0) return null;

  return (
    <div className="similar__box">
      <p className="similar__title">Similar Movies</p>

      <Swiper
        slidesPerView={numberOfSlides}
        modules={[Navigation]}
        spaceBetween={15}
        className="similar__pictures"
      >
        {arr.map(
          (picture) =>
            picture.poster_path &&
            picture.id !== currentPicture.id && (
              <SwiperSlide key={picture.id}>
                <PictureComponent
                  pic={picture}
                  picTo={picTo}
                  replace={true}
                  onClick={pictureClickHandler}
                  loaderCls="margin-top-bottom-10"
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}

export default SimilarPictures;
