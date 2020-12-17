import {chain} from 'icepick';
import {
  GET_CONTACTS_SUCCESS,
  SET_CONTACT,
} from './contacts-screen.actions.const';

const initialState = {
  contacts: [],
  selectedContact: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_CONTACTS_SUCCESS:
      return chain(state)
        .setIn(['contacts'], payload)
        .setIn(['selectedContact'], null)
        .value();

    case SET_CONTACT:
      return chain(state).setIn(['selectedContact'], payload).value();

    default:
      return state;
  }
};
