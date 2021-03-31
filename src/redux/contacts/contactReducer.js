import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  addValue,
  resetValue,
} from './contact-actions';

const initialState = [];
const contacts = createReducer(initialState, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const name = createReducer('', {
  'values/addname': (_, { payload }) => payload,
  [resetValue]: (_, { payload }) => payload,
});

const number = createReducer('', {
  'values/addnumber': (_, { payload }) => payload,
  [resetValue]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  'values/addfilter': (_, { payload }) => payload,
  [resetValue]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, name, number, filter });

// const contacts = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const name = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.NAME_CHANGE:
//       return payload;
//     case types.RESET:
//       return payload;

//     default:
//       return state;
//   }
// };
// const number = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.NUMBER_CHANGE:
//       return payload;
//     case types.RESET:
//       return payload;
//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CHANGE:
//       return payload;
//     case types.RESET:
//       return payload;
//     default:
//       return state;
//   }
// };
