import PropTypes from "prop-types";

function SearchFilter({searchFilter, handleChangeSearch, handleChangeHouse}) {
  
  const handleSearchFilter = (ev) => {
    handleChangeSearch(ev.currentTarget.value);
  };

  const handleReset = () => {
    handleChangeSearch('');
    handleChangeHouse('Gryffindor');
  }
  
  return (
    <div>
      <label className="form_label">Search by name:</label>
      <div className="form_input">
        <input className="form_input_text form_input_search" type="text" onChange={handleSearchFilter} value={searchFilter} placeholder="Search your character" name="search_filter" id="search_filter" />
        <button className="form_button_reset" type="button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

SearchFilter.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  handleChangeSearch: PropTypes.func.isRequired,
  handleChangeHouse: PropTypes.func.isRequired
}

export default SearchFilter;
  