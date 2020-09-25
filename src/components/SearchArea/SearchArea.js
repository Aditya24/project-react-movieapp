import React from "react";

const SearchArea = (props) => {
  return (
    <div>
      <form action='' onSubmit={props.handelSubmit}>
        <div className='input-field'>
          <input
            placeholder='Search Movie'
            onChange={props.handelChange}
            type='text'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchArea;
