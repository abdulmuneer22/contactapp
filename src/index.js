import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import configureStore from './redux/store';

const {store} = configureStore();
console.disableYellowBox = true;

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
