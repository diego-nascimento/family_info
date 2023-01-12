import React from 'react';
import { Text, View } from 'react-native';
import { DocumentProps } from '../../../../../../shared/Contexts/usePersons/types';
import Styles from './style';

interface Props {
  item: DocumentProps;
}

export const DocumentInfo = ({ item }: Props) => {
  return (
    <View style={Styles.Document}>
      <Text style={Styles.Label}>{item.name}: </Text>
      <Text style={Styles.value}>{item.number}</Text>
    </View>
  );
};
