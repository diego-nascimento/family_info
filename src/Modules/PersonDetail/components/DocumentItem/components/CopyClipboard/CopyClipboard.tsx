import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { DocumentProps } from '../../../../../../shared/Contexts/usePersons/types';

interface Props {
  item: DocumentProps;
}

export const CopyClipboard = ({ item }: Props) => {
  const handleClickOnCopy = () => {
    Clipboard.setString(item.number);
    Alert.alert('Documento copiado para o Clipboard');
  };
  return (
    <TouchableOpacity onPress={handleClickOnCopy}>
      <View>
        <Text>Copiar</Text>
      </View>
    </TouchableOpacity>
  );
};
