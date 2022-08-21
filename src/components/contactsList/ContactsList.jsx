import { ContactItem } from 'components/contactItem/ContactItem';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css'

export const ContactsList = ({ contacts, deleteItem }) => {
  const {contactsList} = styles
  return (
    <div>
      {contacts.length > 0 ? (
        <ul className={contactsList}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      ) : (
        <p className={contactsList}> No contacts available </p>
      )}
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
