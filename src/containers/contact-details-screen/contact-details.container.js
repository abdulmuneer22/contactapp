import {connect} from 'react-redux';
import ContactDetails from './contact-details';
import idx from 'idx';

const mapStateToProps = (state) => {
  let selectedContact = idx(state, (_) => _.contacts.selectedContact) || [];
  return {
    selectedContact,
  };
};

export default connect(mapStateToProps, null)(ContactDetails);
