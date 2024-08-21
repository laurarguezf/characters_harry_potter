import { useState, useEffect } from "react";
import { getCharacters } from "../services/charactersApi";
import "../styles/App.scss";
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./characters/CharacterDetails";
import Landing from "./Landing";
import logo from "/images/logo.png"
import clouds from "/videos/clouds.mp4"

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
  
  const filteredCharacters = characters
    .filter((filteredCharacter) => houseFilter === "all" || filteredCharacter.house === houseFilter)
    .filter((searchCharacter) => searchCharacter.name.toLowerCase().includes(searchFilter.toLowerCase()));

  const showDetailedCharacter = (id) => {
    const detailedCharacter = characters.find(character => character.id === id);
    return detailedCharacter; 
  }

  return (
    <div>
      <video className="video_background" autoPlay muted loop>
        <source src={clouds} type="video/mp4"/>
      </video>
      <header className="header">
        <img src={logo} className="header_logo" alt="Harry Potter Logo" />
        <h1 className="header_title">Character finder</h1>
      </header>

      <main className="main">
        <Routes>
          <Route path="" element={<Landing filteredCharacters={filteredCharacters} houseFilter={houseFilter} handleChangeHouse={handleChangeHouse} searchFilter={searchFilter} handleChangeSearch={handleChangeSearch}/>} />
          <Route path="/details/:id" element={<CharacterDetails showDetailedCharacter={showDetailedCharacter} />} />
        </Routes>
      </main>

      <footer className="footer">
        <small>&copy;2024 Adalabers <span className="lightning">ϟ</span> promo Betty</small>
      </footer>
    </div>
  );
} 

export default App;
