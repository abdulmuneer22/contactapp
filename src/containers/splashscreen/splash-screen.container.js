import {connect} from 'react-redux';
import SplashScreen from './splash-screen';
import idx from 'idx';

const mapStateToProps = state => {
  let config = idx(state, _ => _.appStateReducer.config) || {};
  return {
    config,
  };
};

export default connect(
  mapStateToProps,
  null,
)(SplashScreen);
