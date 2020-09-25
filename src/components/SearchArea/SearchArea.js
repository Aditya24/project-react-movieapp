import React from "react";

const SearchArea = (props) => {
  return (
    <>
      <form className='form-search' action='' onSubmit={props.handelSubmit}>
        <input
          className='searchTerm'
          placeholder='Avengers'
          onChange={props.handelChange}
          type='search'
          name='search'
        />
        <button type='submit' onSubmit={props.handelSubmit}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchArea;
