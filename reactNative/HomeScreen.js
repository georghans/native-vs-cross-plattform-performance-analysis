import React from 'react';
import { Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  return (
    <>
      <Button
        onPress={() => navigation.navigate('NumericalCalculations')}
        title={'Numerical Calculations Test'}>
        Numerical Calculations Test
      </Button>
      <Button
        onPress={() => navigation.navigate('SharedPreferences')}
        title={'Shared Preferences Test'}>
        Shared Preferences Test
      </Button>
    </>
  );
};

export default HomeScreen;
