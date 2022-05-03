import Navbar from '../Navbar';
import BackgroundImage from '../BackgroundImage';
import Poster from '../Poster';
import Genres from '../Genres';
import MovieDetails from '../MovieDetails';
import Casts from '../Casts';
import Trailer from '../Trailer';
import Spinner from '../Spinner';
import SimilarPictures from '../SimilarPictures';
import SeriesDetails from '../SeriesDetails';
import Footer from '../Footer';
import api, { endpoint } from '../../apis/index';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Cast, Picture, PictureDetailsType, Video } from '../../data';
import '../../styles/PicturePage.scss';

interface PicturePageProps {
  to: string;
  setter: (n: number) => void;
}

function PicturePage({ setter, to }: PicturePageProps): JSX.Element {
  const location = useLocation();
  const [pic, setPic] = useState<Picture>(location.state as Picture);
  const [similarPictures, setSimilarPictures] = useState<Picture[]>([]);
  const [casts, setCasts] = useState<Cast[]>([]);
  const [trailer, setTrailer] = useState<Video | undefined>();
  const [pictureDetails, setPictureDetails] = useState<
    PictureDetailsType | undefined
  >();
  const [backLoaded, setBackLoaded] = useState<boolean>(false);
  const [frontLoaded, setFrontLoaded] = useState<boolean>(false);
  const backLoadedHandler = () => setBackLoaded(true);
  const frontLoadedHandler = () => setFrontLoaded(true);
  const notLoaded = !backLoaded && !frontLoaded;
  const notLoadedHide = notLoaded ? 'hide' : '';

  useEffect(() => {
    if (pic)
      (async () => {
        const cr = await api.get(endpoint(`${to}/${pic.id}/credits`));
        const tr = await api.get(endpoint(`${to}/${pic.id}/videos`));
        const dr = await api.get(endpoint(`${to}/${pic.id}`));
        const sr = await api.get(endpoint(`${to}/${pic.id}/similar`));
        const c = cr.data.cast;
        const t = tr.data.results.find(
          (item: Video) => item.type === 'Trailer'
        );
        const d = dr.data;
        const s = sr.data.results;
        setPictureDetails(d);
        setCasts(c);
        setTrailer(t);
        setSimilarPictures(s);
      })();
  }, [pic]);

  return (
    <div className="picturePage">
      <Navbar />

      {notLoaded && (
        <div className="spinnerBox flex-1">
          <Spinner cls="" />
        </div>
      )}

      <BackgroundImage
        pic={pic}
        backLoadedHandler={backLoadedHandler}
        cls={notLoadedHide}
      />

      <div className={`pictureDetails ${notLoadedHide}`}>
        <Poster pic={pic} frontLoadedHandler={frontLoadedHandler} />
        <div className="pictureDetails__box">
          <h1 className="pictureDetails__title">
            {pic.title || pic.original_name}
          </h1>
          <Genres pic={pic} />
          {to === '/movie' && <MovieDetails movieDetails={pictureDetails} />}
          {to === '/tv' && <SeriesDetails seriesDetails={pictureDetails} />}
          <p className="pictureDetails__overview">{pic.overview}</p>
          <Casts casts={casts} />
        </div>
      </div>

      <Trailer cls={notLoadedHide} trailer={trailer} />

      <SimilarPictures
        arr={similarPictures}
        currentPicture={pic}
        picTo={to}
        pictureClickHandler={() => setter(Math.random())}
      />

      <Footer />
    </div>
  );
}
export default PicturePage;
