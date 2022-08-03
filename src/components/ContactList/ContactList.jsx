// import { ContactsList, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Item } from './ContactList.styled';
export const ContactList = ({ contacts, deleteId }) => {
  return (
    <>
      {contacts.map(({ name, id, number }) => (
        <Item key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteId(id)}>
            Delete
          </button>
        </Item>
      ))}
    </>
  );
};
PropTypes.ContactList = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteId: PropTypes.func.isRequired,
};
