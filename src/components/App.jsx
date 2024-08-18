import { useState, useEffect } from "react";
import { getCharacters } from "../services/charactersApi";
import CharactersList from "./characters/CharactersList";
import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./characters/CharacterDetails";

function App() {
  // VARIABLES DE ESTADO

  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("Gryffindor");

  // USEEFFECT

  useEffect(() => {
    getCharacters().then((responseData) => {
      setCharacters(responseData);
    });
  }, []);

  // EVENTOS

  const handleHouseFilter = (ev) => {
    const houseSelection = ev.currentTarget.value;
    setHouseFilter(houseSelection);
  };

  // FUNCIONES DE RENDERIZADO

  const filteredCharacters = characters.filter((filteredCharacter) => {
    if (houseFilter === "all") {
      return true;
    } else {
      return filteredCharacter.house === houseFilter;
    }
  });

  const showDetailedCharacter = (id) => {
    const detailedCharacter = characters.find(character => character.id === id);
    return detailedCharacter;
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de personajes</h1>
      </header>

      <main className="main">
        <Routes>
          <Route path="" element={
              <>
                <form>
                  <div>
                    <label>House</label>
                    <div>
                      <select onChange={handleHouseFilter} value={houseFilter} name="house" id="house">
                        <option value="all">All houses</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                      </select>
                    </div>
                  </div>
                </form>

                <section>
                  <h2>Lista de personajes</h2> 
                  <CharactersList characters={filteredCharacters} />
                </section>
              </>
            }
          />
          <Route path="/details/:id" element={<CharacterDetails showDetailedCharacter={showDetailedCharacter} />}/>
        </Routes>
      </main>

      <footer>
        <small>&copy;2024 Adalabers 🥒 promo Betty</small>
      </footer>
    </div>
  );
}

export default App;
