import {connect} from 'react-redux';
import ContactsScreen from './contacts-screen';
import idx from 'idx';
import {getContacts, setContact} from './contacts-screen.actions';

const mapStateToProps = (state) => {
  let {contacts, selectedContact} = idx(state, (_) => _.contacts) || [];
  return {
    contacts,
    selectedContact,
  };
};

export default connect(mapStateToProps, {getContacts, setContact})(
  ContactsScreen,
);
