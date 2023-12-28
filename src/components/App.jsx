import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contactsSafe')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    const { name } = data;
    // console.log(name);
    const findName = contact =>
      contact.name.toLowerCase() === name.toLowerCase();

    if (contacts.length && contacts.some(findName)) {
      return toast.warn(`${name} is already in contacts.`);
    } else {
      setContacts([...contacts, newContact]);
      console.log(contacts);
    }
  };
  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contactsSafe', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <ToastContainer autoClose={1500} />
      <Title text="Phonebook" />
      <ContactForm onSubmit={formSubmitHandler} />
      <Title text="Contacts" />
      <Filter handleFilter={handleFilter} value={filter} />
      <ContactList
        contacts={
          contacts.length
            ? contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
              )
            : contacts
        }
        deleteContact={deleteContact}
      />
    </>
  );
}
