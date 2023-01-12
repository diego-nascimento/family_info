import React from 'react';
import Styles from './style';
import { View, Text } from 'react-native';
import { TouchableOpacityButton } from '../../../../Components/Cels';

interface Props {
  onCancel: () => void;
  onSave: () => void;
}

export const Buttons = ({ onCancel, onSave }: Props) => {
  return (
    <View style={Styles.ButtonsWrapper}>
      <TouchableOpacityButton onPress={onCancel}>
        <View style={[Styles.ButtonContainer, Styles.ButtonCancel]}>
          <Text style={Styles.ButtonText}>Cancelar</Text>
        </View>
      </TouchableOpacityButton>
      <TouchableOpacityButton onPress={onSave}>
        <View style={[Styles.ButtonContainer, Styles.ButtonSave]}>
          <Text style={Styles.ButtonText}>Salvar</Text>
        </View>
      </TouchableOpacityButton>
    </View>
  );
};
