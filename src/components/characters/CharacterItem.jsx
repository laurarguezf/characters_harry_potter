import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { capitalizeLetter } from "../../services/capitalizeLetter";
import defaultImage from "../../images/snitch.png";

function CharacterItem({ character }) {
  return (
    <Link to={`/details/${character.id}`}>
      <img src={character.image || defaultImage} alt={`Foto de ${character.name}`} />
      <div>
        <h2>{character.name}</h2>
        <p>{capitalizeLetter(character.species)}</p>
      </div>
    </Link>
  );
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterItem;
 