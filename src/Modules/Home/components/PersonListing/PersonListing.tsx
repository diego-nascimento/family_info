import { FlatList } from 'react-native';
import React from 'react';
import Styles from './style';
import { Item } from './components';
import { usePerson } from '../../../../shared/Contexts';

export const PersonListing = () => {
  const { persons } = usePerson();
  return (
    <FlatList
      style={Styles.List}
      data={persons}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item person={item} />}
    />
  );
};
