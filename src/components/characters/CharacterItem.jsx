/* eslint-disable react/prop-types */
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

export default CharacterItem;
