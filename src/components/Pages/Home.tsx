import Context from '../../context/index';
import Pictures from '../Pictures';
import { useContext } from 'react';

function Home(): JSX.Element {
  const { popularMovies, popularSeries, topMovies, topSeries } =
    useContext(Context);

  return (
    <div className="home">
      <Pictures arr={popularMovies} title="Popular Movies" />
      <Pictures arr={topMovies} title="Top Movies" />
      <Pictures arr={popularSeries} title="Popular Series" />
      <Pictures arr={topSeries} title="Top Movies" />
    </div>
  );
}
export default Home;
