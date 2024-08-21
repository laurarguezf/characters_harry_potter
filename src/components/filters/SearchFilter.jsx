import PropTypes from "prop-types";

function SearchFilter({searchFilter, handleChangeSearch}) {
  
  const handleSearchFilter = (ev) => {
    handleChangeSearch(ev.currentTarget.value);
  };
  
  return (
    <div>
      <input type="text" onChange={handleSearchFilter} value={searchFilter} placeholder="Search your character" name="search_filter" id="search_filter" />
    </div>
  );
}

SearchFilter.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  handleChangeSearch: PropTypes.func.isRequired
}

export default SearchFilter;
  