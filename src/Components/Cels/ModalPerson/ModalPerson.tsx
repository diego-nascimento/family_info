import React, { useState } from 'react';
import { Button, Modal, View, Alert } from 'react-native';
import { PersonsProps } from '../../../shared/Contexts/usePersons/types';
import { TextInputComponent } from '../../Atoms';
import Styles from './style';

interface Props {
  showModal: boolean;
  handleHideModal: () => void;
  existingPersonName?: PersonsProps;
  handleSubmit: (name: string, person?: PersonsProps) => void;
}

export const ModalPerson = ({
  showModal,
  handleHideModal,
  existingPersonName = { id: '', name: '' },
  handleSubmit,
}: Props) => {
  const [personName, setPersonName] = useState(existingPersonName.name);

  const handleSave = () => {
    if (personName === '') {
      Alert.alert('O nome não pode ser vazio');
      handleHideModal();
      setPersonName('');
    }
    handleSubmit(personName, existingPersonName);
    handleHideModal();
    setPersonName('');
  };

  const handlecancel = () => {
    handleHideModal();
    setPersonName('');
  };

  return (
    <Modal visible={showModal} transparent animationType="fade">
      <View style={Styles.centeredView}>
        <View style={Styles.modalView}>
          <TextInputComponent
            onChange={setPersonName}
            value={personName}
            label="Nome"
          />

          <View style={Styles.ButtonsContainer}>
            <Button title="Cancelar" onPress={handlecancel} />
            <Button title="Salvar" onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
