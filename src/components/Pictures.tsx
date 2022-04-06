import Context from '../context';
import PictureComponent from './PictureComponent';
import TitleBox from './TitleBox';
import { useContext } from 'react';
import { Picture } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

interface PicturesProps {
  arr: Picture[];
  title: string;
}

function Pictures({ arr, title }: PicturesProps): JSX.Element {
  const { numberOfSlides } = useContext(Context);

  return (
    <div className="PicturesBox">
      <TitleBox title={title} />

      <Swiper
        slidesPerView={numberOfSlides}
        modules={[Navigation]}
        spaceBetween={17.5}
        className="pictures"
      >
        {arr.map((pic) => (
          <SwiperSlide className="picture" key={pic.title || pic.original_name}>
            <PictureComponent pic={pic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Pictures;
