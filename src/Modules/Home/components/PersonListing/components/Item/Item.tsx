import React from 'react';
import { Text, View, Alert } from 'react-native';
import {
  ModalPerson,
  TouchableOpacityButton,
} from '../../../../../../Components/Cels';
import Styles from './style';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AppNavigatorParams } from '../../../../../../Routes/AppNavigation/AppNavigatorParams';
import { usePerson } from '../../../../../../shared/Contexts/usePersons/usePersons';
import { PersonsProps } from '../../../../../../shared/Contexts/usePersons/types';
import { useShowModal } from '../../../../../../shared/hooks';

interface ItemProps {
  person: PersonsProps;
}

export const Item = ({ person }: ItemProps) => {
  const { navigate } = useNavigation<NavigationProp<AppNavigatorParams>>();
  const { handleChangePerson, handleEditPersonName, handleDeletePerson } =
    usePerson();
  const { handleHideModal, handleShowModal, showModal } = useShowModal();

  const handlePress = () => {
    handleChangePerson(person);
    navigate('Details');
  };

  const handleOnSubmit = (name: string, existingPerson?: PersonsProps) => {
    existingPerson && handleEditPersonName(existingPerson, name);
  };

  const handleDelete = () => {
    Alert.alert(
      'Deletando?',
      'Deseja realmente deletar essa pessoa e todas as suas informações',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => handleDeletePerson(person),
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <>
      {showModal && (
        <ModalPerson
          showModal={showModal}
          handleHideModal={handleHideModal}
          existingPersonName={person}
          handleSubmit={handleOnSubmit}
        />
      )}

      <View style={Styles.Wrapper}>
        <TouchableOpacityButton
          onPress={handlePress}
          onLongPress={handleShowModal}>
          <Text style={Styles.Text}>{person.name}</Text>
        </TouchableOpacityButton>
        <TouchableOpacityButton onLongPress={() => handleDelete()}>
          <Text style={Styles.Text}>Remover</Text>
        </TouchableOpacityButton>
      </View>
    </>
  );
};
