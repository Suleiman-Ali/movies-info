import Context from '../context';
import PictureComponent from './PictureComponent';
import TitleBox from './TitleBox';
import { useContext } from 'react';
import { Picture } from '../data';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

interface PicturesProps {
  arr: Picture[];
  title: string;
  to: string;
}

function Pictures({ arr, title, to }: PicturesProps): JSX.Element {
  const { numberOfSlides } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="PicturesBox">
      <TitleBox title={title} to={to} />

      <Swiper
        slidesPerView={numberOfSlides}
        modules={[Navigation]}
        spaceBetween={17.5}
        className="pictures"
      >
        {arr.map((pic) => (
          <SwiperSlide
            className="picture"
            key={pic.id}
            onClick={() => navigate(`/picture/${pic.id}`, { state: pic })}
          >
            <PictureComponent pic={pic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Pictures;
