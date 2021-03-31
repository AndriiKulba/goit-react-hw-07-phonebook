import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactsRequest',
);
export const deleteContactsSuccess = createAction(
  'contacts/deleteContactsSuccess',
);
export const deleteContactsError = createAction('contacts/deleteContactsError');

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => ({
//     payload: {
//       id: uuidv4(),
//       name: name,
//       number: number,
//     },
//   }),
// );
// export const deleteContact = createAction('contacts/deleteContact');
export const addValue = (name, value) => ({
  type: `values/add${name}`,
  payload: value,
});
export const resetValue = createAction('values/reset');
