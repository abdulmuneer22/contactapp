import {createAction} from 'redux-actions';
import idx from 'idx';

import axios from 'axios';
import {
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  SET_CONTACT,
} from './contacts-screen.actions.const';

const getContactsRequest = createAction(GET_CONTACTS_REQUEST);
const getContactsSuccess = createAction(GET_CONTACTS_SUCCESS);
const getContactsFailed = createAction(GET_CONTACTS_FAILURE);

export function getContacts() {
  return async (dispatch) => {
    dispatch(getContactsRequest());
    let response;
    let error;

    try {
      const res = await axios.get(
        `${'http://www.mocky.io/v2/5c41920e0f0000543fe7b889'}`,
      );
      response = idx(res, (_) => _.data.dataList) || '';

      if (response) {
        dispatch(getContactsSuccess(response));
      } else {
        // eslint-disable-next-line prefer-destructuring
        error = (res || {}).error;
        dispatch(getContactsFailed(error));
      }
    } catch (ex) {
      error = ex;
      dispatch(getContactsFailed(error));
    }

    return {response, error};
  };
}

export const setContactRequest = createAction(SET_CONTACT);
export function setContact(contact) {
  return (dispatch) => dispatch(setContactRequest(contact));
}
