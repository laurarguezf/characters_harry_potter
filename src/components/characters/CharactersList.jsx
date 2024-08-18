import PropTypes from "prop-types";
import CharacterItem from "./CharacterItem";


function CharactersList({characters}) {

  if (characters.length === 0) {
    return ( 
      <p>No characters available</p>
    );
  }

  return (
    <ul>
      {characters.map(character => (
        <li key={character.id}>
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
