import PropTypes from "prop-types";
import CharacterItem from "./CharacterItem";


function CharactersList({characters}) {

  if (characters.length === 0) {
    return ( 
      <p className="warning_text">No characters match that name</p>
    );
  }

  return (
    <ul className="character_list">
      {characters.map(character => (
        <li key={character.id} className="character_list_item">
            <CharacterItem character={character}/>
        </li>
      ))}
    </ul>
  );
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharactersList;
