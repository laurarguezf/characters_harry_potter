import PropTypes from "prop-types";

function CharacterItem({ character }) {
  return (
    <article>
      <img src={character.image} alt={`Foto de ${character.name}`} />
      <div>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
    </article>
  );
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterItem;
