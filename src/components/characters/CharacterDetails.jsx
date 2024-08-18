import { Link, useParams } from "react-router-dom";

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
          <h2>Detailed information of </h2>
          <article>
              <img src="" alt="" />
              <div>
                  <p>Name: </p>
                  <p>Status: </p>
                  <p>House: </p>
                  <p>Genre: </p>
                  <p>Specie: </p> 
                  <p>Alternative names: </p>
              </div>
          </article>
          <Link to="/">Volver</Link>
      </div>
  );
}

export default CharacterDetails;