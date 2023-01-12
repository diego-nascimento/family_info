import React from 'react';
import { FlatList, View } from 'react-native';
import { usePerson } from '../../shared/Contexts';

import { DocumentItem } from './components';

import Styles from './style';

export const PersonDetail = () => {
  const { selectedPersonDocuments } = usePerson();

  return (
    <View style={Styles.wrapper}>
      <FlatList
        data={selectedPersonDocuments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DocumentItem item={item} />}
        extraData={selectedPersonDocuments}
      />
    </View>
  );
};
