import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  //   console.log(contacts);
  return contacts.length ? (
    <ul className={css.contactsList}>
      {contacts.map(({ name, number, id }) => (
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
