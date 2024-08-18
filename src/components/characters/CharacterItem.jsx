import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterItem({ character }) {
  return (
    <Link to={`/details/${character.id}`}>
      <img src={character.image} alt={`Foto de ${character.name}`} />
      <div>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
    </Link>
  );
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterItem;
 