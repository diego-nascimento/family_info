import React from 'react';
import VectorIcon from 'react-native-vector-icons/FontAwesome5';

export type Icons = 'user-plus' | 'plus';

interface Props {
  size: number;
  color: string;
  name: Icons;
}

export const Icon = ({ color, name, size }: Props) => {
  return <VectorIcon name={name} size={size} color={color} />;
};
