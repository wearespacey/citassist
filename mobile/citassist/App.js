import React from 'react';
import Home from './components/home';
import Styles from './styles/styles';

import {
  View,
} from 'react-native';

const App= () => {
  return (
    <View style={Styles.test}>
      <Home/>
      {/* TODO navigator */}
    </View>
  );
};

export default App;
