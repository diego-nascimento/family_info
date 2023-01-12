import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress?: () => void;
  onLongPress?: () => void;
  children: React.ReactNode;
}

export const TouchableOpacityButton = ({
  children,
  onPress,
  onLongPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      {children}
    </TouchableOpacity>
  );
};
