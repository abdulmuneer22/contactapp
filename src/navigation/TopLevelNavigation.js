import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import idx from 'idx';
import ContactsScreen from '../containers/contacts-screen/contacts-scree.container';
import ContactDetails from '../containers/contact-details-screen/contact-details.container';

const Stack = createStackNavigator();

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="ContactsScreen">
          <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
          <Stack.Screen name="ContactDetails" component={ContactDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  let promises = idx(state, (_) => _.promises.IN_PROGRESS);
  return {
    promises,
  };
};

export default connect(mapStateToProps, null)(Main);
