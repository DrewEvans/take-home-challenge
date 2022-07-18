import React, { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';

import { useQuery } from '@apollo/client';
import { LOAD_DEALS } from '../GraphQL/queries';
import { searchEmployee } from '../helpers/searchFunction';
import SearchedDeals from '../components/SearchedDeals';
import { NavLink } from 'react-router-dom';
import Pagination from '../components/Pagination';

const SearchPage = () => {
  const [searchedDeals, setsearchedDeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [currentSearched, setcurrentSearched] = useState([]); //default rows is set to blank array
  const [currentPage, setCurrentPage] = useState(1); // default pagination default is 1
  const [dealsPerPage, setdealsPerPage] = useState(10); //default records per page is 10

  const { data } = useQuery(LOAD_DEALS);

  //last page number based on rows per page
  const indexofLastRow = currentPage * dealsPerPage;
  //first page number based on how many rows per page
  const indexOfFirstRow = indexofLastRow - dealsPerPage;

  const totalDeals = Math.ceil(searchedDeals.length);

  useEffect(() => {
    setcurrentSearched(searchedDeals.slice(indexOfFirstRow, indexofLastRow));
  }, [currentPage, dealsPerPage]);

  const handleOnKeyUp = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    setsearchedDeals(searchEmployee(data.sales, searchTerm));
    setcurrentSearched(
      searchEmployee(data.sales, searchTerm).slice(
        indexOfFirstRow,
        indexofLastRow
      )
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <header>
        <h1>SECRETESCAPES</h1>
        <SearchBar onKeyUp={handleOnKeyUp} onClick={handleClick} />
        <NavLink style={{ margin: '0em', textDecoration: 'none' }} to='/'>
          See all deals
        </NavLink>
      </header>
      {searchedDeals.length > 0 ? (
        <>
          <main className='deals-container'>
            <SearchedDeals sales={currentSearched} />
            <Pagination
              totalDeals={totalDeals}
              dealsPerPage={dealsPerPage}
              currentPage={currentPage}
              paginate={paginate}
            />
          </main>
        </>
      ) : (
        <h2 style={{ textAlign: 'center' }}>
          No Results found: Try Searching for a destination
        </h2>
      )}
    </>
  );
};

export default SearchPage;
