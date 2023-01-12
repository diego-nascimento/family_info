import React, { useState, useContext, useLayoutEffect } from 'react';
import { DocumentProps, PersonsProps } from './types';

import { createContext } from 'react';
import { useAsyncStorage } from '../../hooks';

interface PersonsContextProps {
  persons: PersonsProps[];
  handleNewPerson: (person: string) => Promise<void>;
  selectedPerson: PersonsProps | null;
  handleChangePerson: (person: PersonsProps) => void;
  handleEditPersonName: (person: PersonsProps, name: string) => void;
  handleDeletePerson: (person: PersonsProps) => void;
  handleNewDocument: (document: DocumentProps) => Promise<void>;
  selectedPersonDocuments: DocumentProps[];
  handleDeleteDocument: (document: DocumentProps) => Promise<void>;
}

const PersonsContext = createContext({} as PersonsContextProps);

interface PersonsProviderProps {
  children: React.ReactNode;
}

const PersonsProvider = ({ children }: PersonsProviderProps) => {
  const [persons, setPersons] = useState<PersonsProps[]>([] as PersonsProps[]);
  const [selectedPerson, setSelectedPerson] = useState<PersonsProps | null>(
    null,
  );

  const { getDataAsync, saveAsync } = useAsyncStorage();

  useLayoutEffect(() => {
    const handleGetData = async () => {
      const personsFromAsyncStorage = await getDataAsync<PersonsProps[]>(
        '@persons',
      );
      if (personsFromAsyncStorage) {
        setPersons(personsFromAsyncStorage);
      }
    };

    handleGetData();
  }, [getDataAsync]);

  const handleNewPerson = async (person: string): Promise<void> => {
    const Persons = [...persons, { name: person, id: Date.now().toString() }];
    setPersons(Persons);

    await saveAsync('@persons', Persons);
  };

  const handleChangePerson = (person: PersonsProps) => {
    setSelectedPerson(person);
  };

  const handleEditPersonName = async (person: PersonsProps, name: string) => {
    const Persons = [
      ...persons.filter((personFromArray) => personFromArray.id !== person.id),
      { ...person, name },
    ];
    setPersons(Persons);

    await await saveAsync('@persons', Persons);
  };

  const handleDeletePerson = async (person: PersonsProps) => {
    const Persons = [
      ...persons.filter((personFromArray) => personFromArray.id !== person.id),
    ];
    setPersons(Persons);

    await await saveAsync<PersonsProps[]>('@persons', Persons);
  };

  const handleNewDocument = async (document: DocumentProps) => {
    const Persons = [
      ...persons.filter(
        (personFromArray) => personFromArray.id !== selectedPerson?.id,
      ),
    ];
    const personWithNewDocument: PersonsProps = {
      ...(selectedPerson ?? ({} as PersonsProps)),
      documents: [...(selectedPerson?.documents || []), document],
    };
    const newPersons = [...Persons, personWithNewDocument];
    setPersons(newPersons);
    await saveAsync<PersonsProps[]>('@persons', newPersons);
  };

  const handleDeleteDocument = async (document: DocumentProps) => {
    const Persons = [
      ...persons.filter(
        (personFromArray) => personFromArray.id !== selectedPerson?.id,
      ),
    ];
    const documentsWithoutTheDeletedDocument =
      handleSelectedPersonDocuments().filter(
        (arrayDocument) => arrayDocument.id !== document.id,
      );
    const personWithoutTheDocument: PersonsProps = {
      ...(selectedPerson || ({} as PersonsProps)),
      documents: documentsWithoutTheDeletedDocument,
    };
    setPersons([...Persons, personWithoutTheDocument]);
    await saveAsync<PersonsProps[]>('@persons', [
      ...Persons,
      personWithoutTheDocument,
    ]);
  };

  const handleSelectedPersonDocuments = () => {
    const person = persons.find(
      (arrayPerson) => arrayPerson.id === selectedPerson?.id,
    );
    return person?.documents || [];
  };

  return (
    <PersonsContext.Provider
      value={{
        persons,
        handleNewPerson,
        handleChangePerson,
        selectedPerson,
        handleEditPersonName,
        handleDeletePerson,
        handleNewDocument,
        selectedPersonDocuments: handleSelectedPersonDocuments(),
        handleDeleteDocument,
      }}>
      {children}
    </PersonsContext.Provider>
  );
};

const usePerson = () => {
  const context = useContext(PersonsContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a AuthProvider');
  }
  return context;
};

export { PersonsProvider, usePerson };
