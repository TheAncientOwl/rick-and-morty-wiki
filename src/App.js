import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import theme from './theme';
import CategoryType from './CategoryType';
import { useEffect, useState } from 'react';
import Pagination from './components/pagination';
import { moveToTopAnchor, TopAnchor } from './components/TopAnchor';
import { SimpleContainer } from './components/filter/FilterElements';
import Filter from './components/filter';
import { Deck } from './components/category/CardElements';
import cardsOrNotFound from './components/404-not-found/cardsOrNotFound';

const INVALID_PAGE = -1;

export default function App() {
  const [category, setCategory] = useState(CategoryType.character);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [data, setData] = useState([]);

  const handleFilterChange = value => {
    setPage(INVALID_PAGE);
    setFilter(value);
  };

  const handleFilterReset = () => {
    setPage(1);
    setFilter('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const requestLink =
        page != INVALID_PAGE
          ? `https://rickandmortyapi.com/api/${category}/?page=${page}`
          : `https://rickandmortyapi.com/api/${category}/?name=${filter}`;

      try {
        const response = await fetch(requestLink);
        const json = await response.json();
        if (json.error) {
          setNumberOfPages(0);
          setData([]);
          return;
        }

        setNumberOfPages(json.info.pages);
        setData(json.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [category, page, filter]);

  const pagination = (
    <>
      {page != -1 && (
        <Pagination
          currentPage={page}
          pages={numberOfPages}
          onPrevClick={() => {
            setPage(Math.max(1, page - 1));
            moveToTopAnchor();
          }}
          onNextClick={() => {
            setPage(Math.min(numberOfPages, page + 1));
            moveToTopAnchor();
          }}
        />
      )}
    </>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar onCategoryChange={setCategory} />
        <SimpleContainer>
          <Filter onValueChange={handleFilterChange} onReset={handleFilterReset} defaultText={category} />
          {pagination}
        </SimpleContainer>
        <TopAnchor />
        <Deck>{cardsOrNotFound(data, category)}</Deck>

        <SimpleContainer style={{ justifyContent: 'center' }}>{pagination}</SimpleContainer>
      </ThemeProvider>
    </>
  );
}
