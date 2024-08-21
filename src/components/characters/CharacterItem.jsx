import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { capitalizeLetter } from "../../services/capitalizeLetter";
import defaultImage from "../../images/snitch.png";

function CharacterItem({ character }) {
  return (
    <Link to={`/details/${character.id}`} className="character_container">
      <img src={character.image || defaultImage} alt={`Foto de ${character.name}`} className="character_img" />
      <div>
        <h2 className="character_name">{character.name}</h2>
        <p className="character_specie">{capitalizeLetter(character.species)}</p>
      </div>
    </Link>
  );
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterItem;
 