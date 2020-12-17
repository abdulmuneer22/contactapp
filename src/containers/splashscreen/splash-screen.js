import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import idx from 'idx';
// const SPLASH_IMAGE = require('../../assets/images/pembina1024.png');

export class SplashScreen extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   let {accessToken} = this.props;
    //   // add extra method to validate access token here
    //   if (accessToken) {
    //     this.props.navigation.replace('Home');
    //   } else {
    //     this.props.navigation.replace('Login');
    //   }
    // }, 100);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {/* <Image style={styles.image} source={SPLASH_IMAGE} /> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  let accessToken = idx(state, _ => _.user.user.accessToken) || '';
  return {
    accessToken,
  };
};

export default connect(
  mapStateToProps,
  null,
)(SplashScreen);
