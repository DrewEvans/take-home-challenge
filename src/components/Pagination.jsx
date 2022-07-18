const Pagination = ({ totalDeals, dealsPerPage, paginate, currentPage }) => {
  //empty array of pages
  const numberOfPages = [];

  //loop over the number of pages that are needed depending on rows per page
  for (let i = 1; i <= Math.ceil(totalDeals / dealsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <div className='container' style={{ margin: '0 0  2em 0 ' }}>
      <div className='select-container'>
        <p className='display-text'>
          Showing page <strong> {currentPage}</strong> of{' '}
          <strong>{numberOfPages.at(-1)}</strong>
        </p>
      </div>
      <div className='pagination-directions'>
        <button
          className='direction-left'
          onClick={() => paginate(currentPage - 1)}
          disabled={numberOfPages.at(0) === currentPage}>
          Prev Page
        </button>
        <span className='current-center'>{currentPage}</span>
        <button
          className='direction-right'
          onClick={() => paginate(currentPage + 1)}
          disabled={numberOfPages.at(-1) === currentPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
