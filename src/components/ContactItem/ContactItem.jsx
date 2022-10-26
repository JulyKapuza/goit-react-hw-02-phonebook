import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contactItem}>
    <p className={css.contactText}>
      {name} {number}
    </p>
    <button
      className={css.contactBtn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
