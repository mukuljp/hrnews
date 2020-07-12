import React from "react";

const Pagination = ({ page, totalPages }) => {
  const onNavClick = isIncrement => {
    const step = isIncrement ? 1 : -1;
    global.reactHistory.push(`/${+page + step}`);
  };
  return (
    <nav className="pagination">
      <a disabled={!(+page - 1 >= 0)} onClick={() => onNavClick(false)}>
        Previous
      </a>
      <a disabled={!(+page + 1 < +totalPages)} onClick={() => onNavClick(true)}>
        Next
      </a>
    </nav>
  );
};

export default Pagination;
