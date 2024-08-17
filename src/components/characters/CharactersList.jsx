/* eslint-disable react/prop-types */
import CharacterItem from "./CharacterItem";


function CharactersList({characters}) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
            <CharacterItem character={character}/>
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;
