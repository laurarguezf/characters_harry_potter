import PropTypes from "prop-types";

function HouseFilter({houseFilter, handleChangeHouse}) {
  
  const handleHouseFilter = (ev) => {
    handleChangeHouse(ev.currentTarget.value);
  };
  
  return (
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
  );
}

HouseFilter.propTypes = {
  houseFilter: PropTypes.string.isRequired,
  handleChangeHouse: PropTypes.func.isRequired
}

export default HouseFilter;
  