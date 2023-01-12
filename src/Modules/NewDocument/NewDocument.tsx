import React from 'react';
import { View } from 'react-native';

import { Buttons, DatePickers, TextInputs, Title } from './Components/';

import { useDatePicker } from '../../shared/hooks';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AppNavigatorParams } from '../../Routes/AppNavigation/AppNavigatorParams';
import { usePerson } from '../../shared/Contexts';

export const NewDocument = () => {
  const creatingHook = useDatePicker();
  const expiringHook = useDatePicker();
  const { goBack } = useNavigation<NavigationProp<AppNavigatorParams>>();
  const { handleNewDocument } = usePerson();

  const [name, setName] = React.useState('');
  const [documentNumber, setDocumentNumber] = React.useState('');

  const onCancel = () => {
    goBack();
  };

  const onSave = async () => {
    await handleNewDocument({
      id: Date.now().toString(),
      name,
      number: documentNumber,
      created: creatingHook.isSelected ? creatingHook.date : undefined,
      expiration: expiringHook.isSelected ? expiringHook.date : undefined,
    });
    goBack();
  };

  return (
    <View>
      <Title />
      <TextInputs
        documentNumber={documentNumber}
        setDocumentNumber={setDocumentNumber}
        name={name}
        setName={setName}
      />
      <DatePickers creatingHook={creatingHook} expiringHook={expiringHook} />
      <Buttons onCancel={onCancel} onSave={onSave} />
    </View>
  );
};
