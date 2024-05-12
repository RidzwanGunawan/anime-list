import React from "react";

const Pagination = ({ page, lastpage, setpage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handlePrevPage = () => {
    setpage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    setpage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center px-2 py-4 gap-4 text-color-primary text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="hover:text-color-accent transition-all"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastpage}
      </p>
      <button
        onClick={handleNextPage}
        className="hover:text-color-accent transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
