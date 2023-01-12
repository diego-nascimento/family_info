import React from 'react';
import { Icon } from '../../../../../../Components/Atoms';
import { TouchableOpacityButton } from '../../../../../../Components/Cels';
import { Text, View } from 'react-native';
import Styles from './style';

interface Props {
  handleOnPress: () => void;
  text?: string;
  plusButtonName?: 'user-plus' | 'plus';
}

export const PlusButton = ({
  handleOnPress,
  text,
  plusButtonName = 'user-plus',
}: Props) => {
  return (
    <TouchableOpacityButton onPress={handleOnPress}>
      <View style={Styles.Button}>
        <Icon name={plusButtonName} color="#333" size={20} />
        {text && <Text style={Styles.Text}>{text}</Text>}
      </View>
    </TouchableOpacityButton>
  );
};
