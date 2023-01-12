import React from 'react';
import { View, Alert } from 'react-native';
import { DocumentProps } from '../../../../shared/Contexts/usePersons/types';
import Styles from './style';

import { DateInfo, CopyClipboard, DocumentInfo } from './components';
import { TouchableOpacityButton } from '../../../../Components/Cels';
import { usePerson } from '../../../../shared/Contexts';

interface Props {
  item: DocumentProps;
}

export const DocumentItem = ({ item }: Props) => {
  const { handleDeleteDocument } = usePerson();

  const handleDelete = () => {
    Alert.alert(
      'Deletando?',
      'Deseja realmente deletar esse documento e todas as suas informações',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => handleDeleteDocument(item),
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <TouchableOpacityButton onLongPress={handleDelete}>
      <View style={Styles.Wrapper}>
        <View style={Styles.Container}>
          <DocumentInfo item={item} />
          {(item.created || item.expiration) && <DateInfo item={item} />}
        </View>
        <CopyClipboard item={item} />
      </View>
    </TouchableOpacityButton>
  );
};
