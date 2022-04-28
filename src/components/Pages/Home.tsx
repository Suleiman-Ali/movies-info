import Header from '../Header';
import Context from '../../context/index';
import Pictures from '../Pictures';
import Footer from '../Footer';
import { useContext } from 'react';
import '../../styles/Home.scss';
import {
  POPULAR_MOVIES_PATHS,
  TOP_MOVIES_PATHS,
  POPULAR_SERIES_PATHS,
  TOP_SERIES_PATHS,
} from '../../data/index';
import Navbar from '../Navbar';

function Home(): JSX.Element | null {
  const { popularMovies, popularSeries, topMovies, topSeries } =
    useContext(Context);

  return (
    <div className="home">
      <Navbar />
      <Header />
      <Pictures
        arr={popularMovies}
        title="Popular Movies"
        typeTo={POPULAR_MOVIES_PATHS.typeTo}
        picTo={POPULAR_MOVIES_PATHS.picTo}
      />

      <Pictures
        arr={topMovies}
        title="Top Movies"
        typeTo={TOP_MOVIES_PATHS.typeTo}
        picTo={TOP_MOVIES_PATHS.picTo}
      />

      <Pictures
        arr={popularSeries}
        title="Popular TV"
        typeTo={POPULAR_SERIES_PATHS.typeTo}
        picTo={POPULAR_SERIES_PATHS.picTo}
      />

      <Pictures
        arr={topSeries}
        title="Top TV"
        typeTo={TOP_SERIES_PATHS.typeTo}
        picTo={TOP_SERIES_PATHS.picTo}
      />
      <Footer />
    </div>
  );
}
export default Home;
