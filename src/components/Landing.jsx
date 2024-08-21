import PropTypes from "prop-types";
import CharactersList from "./characters/CharactersList";
import HouseFilter from "./filters/HouseFilter";
import SearchFilter from "./filters/SearchFilter";

function Landing({filteredCharacters, houseFilter, handleChangeHouse, searchFilter, handleChangeSearch}) {
  return (
    <>
      <form>
        <SearchFilter searchFilter={searchFilter} handleChangeSearch={handleChangeSearch} />
        <HouseFilter houseFilter={houseFilter} handleChangeHouse={handleChangeHouse} /> 
      </form>

      <section>
        <h2>Lista de personajes</h2>
        <CharactersList characters={filteredCharacters} />
      </section>
    </>
  );
}

Landing.propTypes = {
  filteredCharacters: PropTypes.array.isRequired,
  houseFilter: PropTypes.string.isRequired,
  handleChangeHouse: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
  handleChangeSearch: PropTypes.func.isRequired
};

export default Landing;
