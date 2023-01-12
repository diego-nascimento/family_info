import React from 'react';
import Styles from './styles';
import { Text, View } from 'react-native';
import {
  DatePickerComponent,
  TouchableOpacityButton,
} from '../../../../Components/Cels';
import { useDatePickerProps } from '../../../../shared/hooks';

import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import { handleShowDate } from '../../../../shared/utils';

interface Props {
  creatingHook: useDatePickerProps;
  expiringHook: useDatePickerProps;
}

export const DatePickers = ({ creatingHook, expiringHook }: Props) => {
  return (
    <View style={Styles.TimeButtonsWrapper}>
      <TouchableOpacityButton onPress={creatingHook.handleOpen}>
        <View style={Styles.TimeButtonContainer}>
          <VectorIcon name="date-range" size={25} color="#000" />
          <Text style={Styles.TimeButtonText}>
            {creatingHook.isSelected
              ? handleShowDate(creatingHook.date)
              : 'Data de criação'}
          </Text>
        </View>
      </TouchableOpacityButton>
      {creatingHook.open && (
        <DatePickerComponent
          open={creatingHook.open}
          date={creatingHook.date}
          onDateChange={creatingHook.setDate}
          mode="date"
          handleClose={creatingHook.handleclose}
          handleSelected={creatingHook.handleSelected}
        />
      )}
      <TouchableOpacityButton onPress={expiringHook.handleOpen}>
        <View style={Styles.TimeButtonContainer}>
          <VectorIcon name="update" size={25} color="#000" />
          <Text style={Styles.TimeButtonText}>
            {expiringHook.isSelected
              ? handleShowDate(expiringHook.date)
              : 'Data de expiração'}
          </Text>
        </View>
      </TouchableOpacityButton>
      {expiringHook.open && (
        <DatePickerComponent
          open={expiringHook.open}
          date={expiringHook.date}
          onDateChange={expiringHook.setDate}
          mode="date"
          handleClose={expiringHook.handleclose}
          handleSelected={expiringHook.handleSelected}
        />
      )}
    </View>
  );
};
