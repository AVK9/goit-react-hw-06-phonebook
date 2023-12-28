import { useState } from 'react';
import css from './ContactForm.module.css';
import { Icon } from '../img/Icon';
import { IMaskInput } from 'react-imask';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.formBox}>
          <label htmlFor="Name" className={css.formLabel}>
            Name
          </label>
          <div className={css.boxInput}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // placeholder="Ivan Bereza"
              required
            />

            <Icon id="user" className={css.iconsInput} />
          </div>

          <label htmlFor="Number" className={css.formLabel}>
            Number
          </label>
          <div className={css.boxInput}>
            {/* <input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/"
              required
            /> */}
            <IMaskInput
              type="tel"
              name="number"
              mask={'+38 (000) 000-00-00'}
              // pattern="/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/"
              value={number}
              onChange={handleChange}
              required
            />
            <Icon id="phone" className={css.iconsInput} />
          </div>

          <button type="submit" className={css.btnAddContact}>
            <Icon id="user-plus" className={css.icons} />
            {/* <i className={css.icon} class="icon ion-md-person-add"></i> */}
            Add contact
          </button>
        </div>
        <ion-icon name="search"></ion-icon>
      </form>
    </div>
  );
}
