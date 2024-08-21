import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { capitalizeLetter } from "../../services/capitalizeLetter";
import defaultImage from "../../images/snitch.png";

function CharacterDetails({showDetailedCharacter}) {

  const params = useParams();

  const detailedCharacterInfo = showDetailedCharacter( params.id );

  if (detailedCharacterInfo === undefined) {
    return ( 
      <div className="warning_character">
        <p className="warning_text">No character found</p>
        <Link to="/" className="return_link">Return to main page</Link>
      </div>
      )
  }

  return (
      <section className="detailed_section">
          <h2 className="detailed_title">{`Detailed information of ${detailedCharacterInfo.name}`}</h2>
          <article className="detailed_character">
            <img src={detailedCharacterInfo.image || defaultImage} alt={`Photo of ${detailedCharacterInfo.name}`} className="detailed_img" />
            <div className="detailed_info">
                <p><span className="bolder">Name:</span> {detailedCharacterInfo.name}</p>
                <p><span className="bolder">Status:</span> {detailedCharacterInfo.alive ? 'Alive' : 'Dead'}</p>
                <p><span className="bolder">House:</span> {detailedCharacterInfo.house}</p>
                <p><span className="bolder">Gender:</span> {capitalizeLetter(detailedCharacterInfo.gender)}</p>
                <p><span className="bolder">Specie:</span> {capitalizeLetter(detailedCharacterInfo.species)}</p> 
                <p><span className="bolder">Alternative names:</span> {detailedCharacterInfo.alternate_names.length === 0 ? 'No alterative names known' : detailedCharacterInfo.alternate_names.join(', ')}</p>
            </div>
          </article>
          <Link to="/" className="return_link">Return to main page</Link>
      </section>
  );
}

CharacterDetails.propTypes = {
  showDetailedCharacter: PropTypes.func.isRequired
};

export default CharacterDetails;