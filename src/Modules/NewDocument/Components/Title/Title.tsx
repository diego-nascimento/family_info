import React from 'react';
import { View, Text } from 'react-native';
import Styles from './style';

export const Title = () => {
  return (
    <View style={Styles.TitleContainer}>
      <Text style={Styles.Title}>Novo Documento</Text>
    </View>
  );
};
