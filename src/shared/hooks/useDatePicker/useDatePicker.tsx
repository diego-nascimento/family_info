import React from 'react';

export interface useDatePickerProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  handleclose: () => void;
  handleSelected: () => void;
  handleOpen: () => void;
}

export const useDatePicker = (): useDatePickerProps => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [open, setOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleclose = () => {
    setOpen(false);
  };

  const handleSelected = () => {
    setIsSelected(true);
  };
  return {
    date,
    setDate,
    open,
    setOpen,
    isSelected,
    setIsSelected,
    handleclose,
    handleSelected,
    handleOpen,
  };
};
