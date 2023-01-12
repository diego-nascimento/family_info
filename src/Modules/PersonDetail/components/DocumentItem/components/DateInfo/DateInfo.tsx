import React from 'react';
import { View, Text } from 'react-native';
import { DocumentProps } from '../../../../../../shared/Contexts/usePersons/types';
import { handleShowDate } from '../../../../../../shared/utils';
import Styles from './style';

interface Props {
  item: DocumentProps;
}

export const DateInfo = ({ item }: Props) => {
  return (
    <View style={Styles.DateInfoContainer}>
      {item.created && (
        <View style={Styles.Document}>
          <Text style={Styles.DateInfoLabel}>Criado: </Text>
          <Text style={Styles.DateInfoValue}>
            {handleShowDate(item.created)}
          </Text>
        </View>
      )}
      {item.expiration && (
        <View style={Styles.Document}>
          <Text style={Styles.DateInfoLabel}>Expira: </Text>
          <Text style={Styles.DateInfoValue}>
            {handleShowDate(item.expiration)}
          </Text>
        </View>
      )}
    </View>
  );
};
