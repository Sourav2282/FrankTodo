import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';


export default create = () => {
  return (
    <View style={styles.container}>
      <Text>create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
