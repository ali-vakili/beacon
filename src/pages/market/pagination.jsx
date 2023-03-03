import React, { useState, useEffect } from "react";
import "./pagination.css";

const Pagination = ({
  currentPage,
  totalPage,
  perPage,
  changePage,
  previousPage,
  nextPage,
}) => {
  const [pages, setPages] = useState([]);
  const [selectedPages, setTotalPages] = useState([]);

  useEffect(() => {
    const result = [];
    for (let page = 1; page <= totalPage; page++) {
      result.push(page);
    }
    setPages(result);
  }, [currentPage, totalPage]);

  useEffect(() => {
    const totalPages = getPages(pages, currentPage, totalPage);
    setTotalPages(totalPages);
  }, [pages]);

  return (
    <div className="pagination-container pagination-beacon">
      <div className="pages">
        <div className="row gx-0 align-items-center">
          {selectedPages && (
            <React.Fragment>
              <button
                className="previous-page change-page"
                onClick={previousPage}
              >
                <span className="sr-only">Previous</span>
              </button>
              {selectedPages.map((page) =>
                typeof page === "number" ? (
                  <button
                    key={page}
                    onClick={() => {
                      changePage(page);
                    }}
                    className={getPageClasses(page, currentPage)}
                  >
                    {page}
                  </button>
                ) : (
                  page
                )
              )}
              <button
                className="next-page change-page"
                onClick={() => nextPage(totalPage)}
              >
                <span className="sr-only">Next</span>
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const getPageClasses = (pageNumber, currentPage) => {
  let classes = "page-number ";
  classes += pageNumber === currentPage ? "current" : "page";
  return classes;
};

const getPages = (pages, currentPage, totalPage) => {
  const currentIndex = pages.indexOf(currentPage);
  const endingPages = totalPage - 2;

  let [firstPages, lastPages, midPages] = [[1], [totalPage], null];
  const ellipsis = (key) => {
    return (
      <span key={key} className="ellipsis">
        <span className="sr-only">ellipsis</span>
      </span>
    );
  };

  if (currentPage < 4) {
    firstPages = pages.slice(0, 4);
    
  } else if (endingPages > currentPage && currentPage > 3) {
    midPages = pages.slice(currentIndex - 1, currentIndex + 2);
  }

  lastPages = currentPage >= endingPages ? pages.slice(-4) : pages.slice(-1);

  const totalPages = midPages
    ? [
        ...firstPages,
        ellipsis("firstEllipsis"),
        ...midPages,
        ellipsis("secondEllipsis"),
        ...lastPages,
      ]
    : [...firstPages, ellipsis("ellipsis"), ...lastPages];

  return totalPages;
};

export default Pagination;
