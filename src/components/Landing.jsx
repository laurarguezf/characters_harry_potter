import PropTypes from "prop-types";
import CharactersList from "./characters/CharactersList";
import HouseFilter from "./filters/HouseFilter";
import SearchFilter from "./filters/SearchFilter";
import { handleSubmit } from "../services/handleSubmit";

function Landing({filteredCharacters, houseFilter, handleChangeHouse, searchFilter, handleChangeSearch}) {
  return (
    <>
      <form onSubmit={handleSubmit} className="landing_form">
        <SearchFilter searchFilter={searchFilter} handleChangeSearch={handleChangeSearch} handleChangeHouse={handleChangeHouse} />
        <HouseFilter houseFilter={houseFilter} handleChangeHouse={handleChangeHouse} /> 
      </form>

      <section className="landing_characters_section">
        <h2 className="characters_title">Cast of characters</h2>
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
