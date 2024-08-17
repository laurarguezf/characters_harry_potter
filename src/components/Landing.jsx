import PropTypes from 'prop-types';

import ContactList from "./contacts/ContactList";
import GenderFilter from './Filters/GenderFilter';

function Landing({contacts, genderFilter, handleChangeGender}) {
  return (
    <>
      <form>
        <GenderFilter genderFilter={genderFilter} handleChangeGender={handleChangeGender}/>
      </form>

      <section className="contacts">
        <h2 className="contacts__title title--medium">Lista de contactos</h2>

        <ContactList contacts={contacts} />
      </section>
    </>
  );
}

Landing.propTypes = {
  contacts: PropTypes.array.isRequired,
  genderFilter: PropTypes.string.isRequired,
  handleChangeGender: PropTypes.func.isRequired
}

export default Landing;
