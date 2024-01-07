import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from 'store/contactListSlice/sliceContactList';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(removeContactAction(id));
  };

  const contactsRender = () => {
    if (contacts.length && filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };
  return contacts.length ? (
    <ul className={css.contactsList}>
      {contactsRender().map(({ name, number, id }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          id={id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  ) : (
    <p className={css.contactsList}>No contacts to filter</p>
  );
};
