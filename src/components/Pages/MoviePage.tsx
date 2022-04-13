import Context from '../../context';
import Navbar from '../Navbar';
import BackgroundImage from '../BackgroundImage';
import PictureDetails from '../PictureDetails';
import Poster from '../Poster';
import PictureDetailsBox from '../PictureDetailsBox';
import PictureTitle from '../PictureTitle';
import Genres from '../Genres';
import MovieDetails from '../MovieDetails';
import PictureOverview from '../PictureOverview';
import Casts from '../Casts';
import Trailer from '../Trailer';
import Footer from '../Footer';
import api, { endpoint } from '../../apis/index';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Picture, Video } from '../../data';
import '../../styles/PicturePage.scss';

function MoviePage(): JSX.Element {
  // prettier-ignore
  const { movieDetailsSetter, castSetter, trailerSetter } = useContext(Context);
  const { state } = useLocation();
  const pic = state as Picture;

  useEffect(() => {
    (async () => {
      const cr = await api.get(endpoint(`/movie/${pic.id}/credits`));
      const tr = await api.get(endpoint(`/movie/${pic.id}/videos`));
      const dr = await api.get(endpoint(`/movie/${pic.id}`));
      const c = cr.data.cast;
      const t = tr.data.results.find((item: Video) => item.type === 'Trailer');
      const d = dr.data;
      movieDetailsSetter(d);
      castSetter(c);
      trailerSetter(t);
    })();
  }, []);

  return (
    <div className="picturePage">
      <Navbar />
      <BackgroundImage pic={pic} />
      <PictureDetails>
        <Poster pic={pic} />
        <PictureDetailsBox>
          <PictureTitle text={pic.title || pic.original_name} />
          <Genres pic={pic} />
          <MovieDetails />
          <PictureOverview text={pic.overview} />
          <Casts />
        </PictureDetailsBox>
      </PictureDetails>
      <Trailer />
      <Footer />
    </div>
  );
}
export default MoviePage;
