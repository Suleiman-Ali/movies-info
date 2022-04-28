import Context from '../../context';
import Navbar from '../Navbar';
import PicturesGrid from '../PicturesGrid';
import ModelFormLabel from '../ModelFormLabel';
import ModelFormInputLabel from '../ModelFormInputLabel';
import ModelFormInputBoxes from '../ModelFormInputBoxes';
import ModelFormBox from '../ModelFormBox';
import PicturesPageForm from '../PicturesPageForm';
import SettingsIcon from '../SettingsIcon';
import Button from '../Button';
import Footer from '../Footer';
import api, { endpoint, endPointWithQuery } from '../../apis/index';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { Picture, TOP_MOVIES_PATHS } from '../../data';
import '../../styles/PicturesPage.scss';
import Spinner from '../Spinner';

function TopMovies(): JSX.Element {
  const { topMovies } = useContext(Context);
  const [picTo, setPicTo] = useState<string>(TOP_MOVIES_PATHS.picTo);
  const [typeTo, setTypeTo] = useState<string>(TOP_MOVIES_PATHS.typeTo);
  const [searchTo, setSearchTo] = useState<string>(TOP_MOVIES_PATHS.searchTo);
  const [keyword, setKeyword] = useState<string>('');
  const userInput = useRef<HTMLInputElement>(undefined!);
  const [model, setModel] = useState<boolean>(false);
  const [filterBy, setFilterBy] = useState<string>('-');
  const [sortBy, setSortBy] = useState<string>('-');
  const [sortingOrder, setSortingOrder] = useState<string>('AS');
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [keywordPictures, setKeywordPictures] = useState<Picture[]>([]);
  const [indexPage, setIndexPage] = useState<number>(2);
  const [keywordIndexPage, setKeywordIndexPage] = useState<number>(2);

  useEffect(() => {
    if (topMovies.length > 0) setPictures(topMovies);
  }, [topMovies]);

  const loadMoreHandler = async () => {
    const res = await api.get(endpoint(typeTo, indexPage));
    setPictures((pictures) => [...pictures, ...res.data.results]);
    setIndexPage((page) => page + 1);
  };

  const loadMoreKeywordHandler = async () => {
    const res = await api.get(
      endPointWithQuery(searchTo, keyword, keywordIndexPage)
    );
    setKeywordPictures((pictures) => [...pictures, ...res.data.results]);
    setKeywordIndexPage((page) => page + 1);
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = userInput.current.value;
    userInput.current.value = '';
    setKeyword(input);

    const pics = (await api.get(endPointWithQuery(searchTo, input))).data
      .results;
    setKeywordPictures(pics);

    setFilterBy('-');
    setSortBy('-');
    setSortingOrder('AS');
    setModel(false);
  };

  const closeModel = () => {
    setKeywordPictures([]);
    setFilterBy('-');
    setSortBy('-');
    setSortingOrder('AS');
    setModel(false);
  };

  return (
    <div className="picturesPage">
      <Navbar />

      {pictures.length <= 0 && (
        <div className="spinnerBox">
          <Spinner cls="margin-top-bottom-23" />
        </div>
      )}

      {pictures.length > 0 && (
        <main className={`picturesPageMain`}>
          <div className="picturesPageHeader">
            <PicturesPageForm
              formSubmitHandler={formSubmitHandler}
              ref={userInput}
            />

            <div className="settings">
              {keywordPictures.length > 0 && (
                <SettingsIcon iconPath="bi-x-circle" onClick={closeModel} />
              )}

              <SettingsIcon
                iconPath="bi-gear"
                onClick={() => setModel((model) => !model)}
              />

              {model && (
                <div className="model">
                  <div className="modelForm">
                    <ModelFormBox>
                      <ModelFormLabel txt="Filter By Genre" />

                      <ModelFormInputBoxes>
                        <ModelFormInputLabel
                          txt="-"
                          condition={filterBy === '-'}
                          onClick={() => setFilterBy('-')}
                        />
                        <ModelFormInputLabel
                          txt="Action"
                          condition={filterBy === 'Action'}
                          onClick={() => setFilterBy('Action')}
                        />
                        <ModelFormInputLabel
                          txt="Comedy"
                          condition={filterBy === 'Comedy'}
                          onClick={() => setFilterBy('Comedy')}
                        />
                        <ModelFormInputLabel
                          txt="Drama"
                          condition={filterBy === 'Drama'}
                          onClick={() => setFilterBy('Drama')}
                        />
                        <ModelFormInputLabel
                          txt="Thriller"
                          condition={filterBy === 'Thriller'}
                          onClick={() => setFilterBy('Thriller')}
                        />
                      </ModelFormInputBoxes>
                    </ModelFormBox>

                    <ModelFormBox>
                      <ModelFormLabel txt="Sort By" />

                      <ModelFormInputBoxes>
                        <ModelFormInputLabel
                          txt="-"
                          condition={sortBy === '-'}
                          onClick={() => setSortBy('-')}
                        />
                        <ModelFormInputLabel
                          txt="Title"
                          condition={sortBy === 'Title'}
                          onClick={() => setSortBy('Title')}
                        />
                        <ModelFormInputLabel
                          txt="Rate"
                          condition={sortBy === 'Rate'}
                          onClick={() => setSortBy('Rate')}
                        />
                      </ModelFormInputBoxes>
                    </ModelFormBox>

                    {sortBy !== '-' && (
                      <ModelFormBox>
                        <ModelFormLabel txt="Order of Sorting" />

                        <ModelFormInputBoxes>
                          <ModelFormInputLabel
                            txt="AS"
                            condition={sortingOrder === 'AS'}
                            onClick={() => setSortingOrder('AS')}
                          />
                          <ModelFormInputLabel
                            txt="DS"
                            condition={sortingOrder === 'DS'}
                            onClick={() => setSortingOrder('DS')}
                          />
                        </ModelFormInputBoxes>
                      </ModelFormBox>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {keywordPictures.length <= 0 && (
            <>
              <PicturesGrid
                pics={pictures}
                filterBy={filterBy}
                sortBy={sortBy}
                sortingOrder={sortingOrder}
                picTo={picTo}
              />

              <Button text="Load More" onClick={loadMoreHandler} />
            </>
          )}

          {keywordPictures.length > 0 && (
            <>
              <PicturesGrid
                pics={keywordPictures}
                filterBy={filterBy}
                sortBy={sortBy}
                sortingOrder={sortingOrder}
                picTo={picTo}
              />

              <Button text="Load More" onClick={loadMoreKeywordHandler} />
            </>
          )}
        </main>
      )}

      <Footer />
    </div>
  );
}

export default TopMovies;
