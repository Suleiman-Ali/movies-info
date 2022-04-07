import Header from '../Header';
import Context from '../../context/index';
import Pictures from '../Pictures';
import Footer from '../Footer';
import { useContext } from 'react';
import '../../styles/Home.scss';

function Home(): JSX.Element | null {
  const { popularMovies, popularSeries, topMovies, topSeries } =
    useContext(Context);

  return (
    <div className="home">
      <Header />
      <Pictures arr={popularMovies} title="Popular Movies" to="/movies" />
      <Pictures arr={topMovies} title="Top Movies" to="/movies" />
      <Pictures arr={popularSeries} title="Popular Series" to="/series" />
      <Pictures arr={topSeries} title="Top Series" to="/series" />
      <Footer />
    </div>
  );
}
export default Home;
