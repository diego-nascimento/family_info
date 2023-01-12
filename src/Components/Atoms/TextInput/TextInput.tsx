import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TextInput } from 'react-native';
import Styles from './style';

interface Props {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  label: string;
  autoFocus?: boolean;
}

export const TextInputComponent = ({
  onChange,
  value,
  label,
  autoFocus = true,
}: Props) => {
  return (
    <View style={Styles.InputContainer}>
      <Text style={Styles.Label}>{label}</Text>
      <TextInput
        style={Styles.Input}
        value={value}
        onChangeText={onChange}
        autoFocus={autoFocus}
      />
    </View>
  );
};
