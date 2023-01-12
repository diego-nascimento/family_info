import { View } from 'react-native';
import React from 'react';
import { Header, PersonListing } from './components';
import Styles from './style';

export const Home = () => {
  return (
    <View style={Styles.Wrapper}>
      <Header />
      <PersonListing />
    </View>
  );
};
