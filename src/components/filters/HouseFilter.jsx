import PropTypes from "prop-types";

function HouseFilter({houseFilter, handleChangeHouse}) {
  
  const handleHouseFilter = (ev) => {
    handleChangeHouse(ev.currentTarget.value);
  };
  
  return (
    <div>
      <label className="form_label">Search by house:</label>
      <div className="form_input">
        <select className="form_input_text form_input_house" onChange={handleHouseFilter} value={houseFilter} name="house" id="house">
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
  