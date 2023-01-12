import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { TextInputComponent } from '../../../../Components/Atoms';
import Styles from './style';

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  documentNumber: string;
  setDocumentNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const TextInputs = ({
  name,
  setName,
  documentNumber,
  setDocumentNumber,
}: Props) => {
  return (
    <SafeAreaView style={Styles.TextInputsContainer}>
      <View style={Styles.InputContainer}>
        <TextInputComponent
          label="Nome do Documento"
          value={name}
          onChange={setName}
          autoFocus={true}
        />
      </View>
      <View style={Styles.InputContainer}>
        <TextInputComponent
          label="Nº do Documento"
          value={documentNumber}
          onChange={setDocumentNumber}
          autoFocus={false}
        />
      </View>
    </SafeAreaView>
  );
};
