import React, { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-native-date-picker';

import Styles from './style';

interface Props {
  open: boolean;
  date: Date;
  onDateChange: Dispatch<SetStateAction<Date>>;
  mode: 'date' | 'time' | 'datetime';
  handleClose: () => void;
  handleSelected: () => void;
}

export const DatePickerComponent = ({
  date,
  onDateChange,
  open,
  mode,
  handleClose,
  handleSelected,
}: Props) => {
  const handleOnConfirm = (data: Date) => {
    handleSelected();
    onDateChange(data);
    handleClose();
  };
  return (
    <DatePicker
      locale="pt"
      open={open}
      date={date}
      onConfirm={handleOnConfirm}
      onCancel={handleClose}
      mode={mode}
      style={[Styles.DatePicker]}
      confirmText="Confirmar"
      cancelText="Cancelar"
      textColor="#000"
      modal={true}
    />
  );
};
