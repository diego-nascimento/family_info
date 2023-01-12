export interface PersonsProps {
  id: string;
  name: string;
  documents?: DocumentProps[];
}

export type maskTypes = 'cpf' | 'rg' | 'null';

export type DocumentProps = {
  id: string;
  number: string;
  name: string;
  expiration?: Date;
  created?: Date;
  mask?: maskTypes;
};
