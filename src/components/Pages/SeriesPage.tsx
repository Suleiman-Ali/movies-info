import Navbar from '../Navbar';
import BackgroundImage from '../BackgroundImage';
import PictureDetails from '../PictureDetails';
import Poster from '../Poster';
import PictureDetailsBox from '../PictureDetailsBox';
import PictureTitle from '../PictureTitle';
import Genres from '../Genres';
import SeriesDetails from '../SeriesDetails';
import PictureOverview from '../PictureOverview';
import Casts from '../Casts';
import Trailer from '../Trailer';
import Footer from '../Footer';
import api, { endpoint } from '../../apis/index';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Cast, Picture, Video, SeriesDetailsType } from '../../data';
import '../../styles/PicturePage.scss';
import Spinner from '../Spinner';

function SeriesPage(): JSX.Element {
  const [casts, setCasts] = useState<Cast[]>([]);
  const [trailer, setTrailer] = useState<Video | undefined>();
  const [seriesDetails, setSeriesDetails] = useState<
    SeriesDetailsType | undefined
  >();
  const { state } = useLocation();
  const pic = state as Picture;
  const [backLoaded, setBackLoaded] = useState<boolean>(false);
  const [frontLoaded, setFrontLoaded] = useState<boolean>(false);
  const backLoadedHandler = () => setBackLoaded(true);
  const frontLoadedHandler = () => setFrontLoaded(true);
  const notLoaded = !backLoaded && !frontLoaded;
  const notLoadedHide = notLoaded ? 'hide' : '';

  useEffect(() => {
    (async () => {
      const cr = await api.get(endpoint(`/tv/${pic.id}/credits`));
      const tr = await api.get(endpoint(`/tv/${pic.id}/videos`));
      const dr = await api.get(endpoint(`/tv/${pic.id}`));
      const c = cr.data.cast;
      const t = tr.data.results.find((item: Video) => item.type === 'Trailer');
      const d = dr.data;
      setSeriesDetails(d);
      setCasts(c);
      setTrailer(t);
    })();
  }, []);

  return (
    <div className="picturePage">
      <Navbar />
      <BackgroundImage
        pic={pic}
        backLoadedHandler={backLoadedHandler}
        cls={notLoadedHide}
      />
      <PictureDetails cls={notLoadedHide}>
        <Poster pic={pic} frontLoadedHandler={frontLoadedHandler} />
        <PictureDetailsBox>
          <PictureTitle text={pic.title || pic.original_name} />
          <Genres pic={pic} />
          <SeriesDetails seriesDetails={seriesDetails} />
          <PictureOverview text={pic.overview} />
          <Casts casts={casts} />
        </PictureDetailsBox>
      </PictureDetails>
      <Trailer cls={notLoadedHide} trailer={trailer} />

      {notLoaded && (
        <div className="spinnerBox flex-1">
          <Spinner cls="" />
        </div>
      )}

      <Footer />
    </div>
  );
}
export default SeriesPage;
