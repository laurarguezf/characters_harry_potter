import { useState, useEffect } from "react";
import { getCharacters } from "../services/charactersApi";
import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./characters/CharacterDetails";
import Landing from "./Landing";

function App() {

  // VARIABLES DE ESTADO

  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  const [searchFilter, setSearchFilter] = useState( '' );

  // USEEFFECT

  useEffect(() => {
    getCharacters().then((responseData) => {
      setCharacters(responseData);
    });
  }, []);

  // EVENTOS

  const handleChangeHouse = (house) => {
    setHouseFilter(house); 
  }

  const handleChangeSearch = (search) => {
    setSearchFilter(search);
  }

  // FUNCIONES DE RENDERIZADO

  {/*const filteredCharacters = characters
    .filter((filteredCharacter) => {
      if (houseFilter === "all" ) {
        return true;
      } else {
        return filteredCharacter.house === houseFilter;
      }
    })
    .filter((searchCharacter) => {
        return searchCharacter.name.toLowerCase().includes(searchFilter.toLowerCase());
    });*/}
  
  const filteredCharacters = characters
    .filter((filteredCharacter) => houseFilter === "all" || filteredCharacter.house === houseFilter)
    .filter((searchCharacter) => searchCharacter.name.toLowerCase().includes(searchFilter.toLowerCase()));

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
          <Route path="" element={<Landing filteredCharacters={filteredCharacters} houseFilter={houseFilter} handleChangeHouse={handleChangeHouse} searchFilter={searchFilter} handleChangeSearch={handleChangeSearch}/>} />
          <Route path="/details/:id" element={<CharacterDetails showDetailedCharacter={showDetailedCharacter} />} />
        </Routes>
      </main>

      <footer>
        <small>&copy;2024 Adalabers : promo Betty</small>
      </footer>
    </div>
  );
} 

export default App;
