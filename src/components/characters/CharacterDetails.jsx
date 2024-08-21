import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { capitalizeLetter } from "../../services/capitalizeLetter";
import defaultImage from "../../images/snitch.png";

function CharacterDetails({showDetailedCharacter}) {

  const params = useParams();

  console.log(params);

  const detailedCharacterInfo = showDetailedCharacter( params.id );

  if (detailedCharacterInfo === undefined) {
    return ( 
      <div>
        <p>No character found</p>
      </div>
      )
  }

  return (
      <div>
          <h2>{`Detailed information of ${detailedCharacterInfo.name}`}</h2>
          <article>
              <img src={detailedCharacterInfo.image || defaultImage} alt={`Photo of ${detailedCharacterInfo.name}`} />
              <div>
                  <p>Name: {detailedCharacterInfo.name}</p>
                  <p>Status: {detailedCharacterInfo.alive ? 'Alive' : 'Dead'}</p>
                  <p>House: {detailedCharacterInfo.house}</p>
                  <p>Gender: {capitalizeLetter(detailedCharacterInfo.gender)}</p>
                  <p>Specie: {capitalizeLetter(detailedCharacterInfo.species)}</p> 
                  <p>Alternative names: {detailedCharacterInfo.alternate_names.length === 0 ? 'No alterative names known' : detailedCharacterInfo.alternate_names.join(', ')}</p>
              </div>
          </article>
          <Link to="/">Return to main page</Link>
      </div>
  );
}

CharacterDetails.propTypes = {
  showDetailedCharacter: PropTypes.func.isRequired
};

export default CharacterDetails;