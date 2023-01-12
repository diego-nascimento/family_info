import { format, parseISO } from 'date-fns';

export const handleShowDate = (date: Date) => {
  const formatedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(formatedDate, 'dd/MM/yyyy');
};
