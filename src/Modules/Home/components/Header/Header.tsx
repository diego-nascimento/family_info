import React from 'react';

import { PlusButton, UserProfile } from './components';
import { HeaderContainer, ModalPerson } from '../../../../Components/Cels';
import { useShowModal } from '../../../../shared/hooks';
import { usePerson } from '../../../../shared/Contexts';

export const Header = () => {
  const { handleHideModal, handleShowModal, showModal } = useShowModal();
  const { handleNewPerson } = usePerson();

  const handleOnSubmit = (name: string) => {
    handleNewPerson(name);
  };

  return (
    <HeaderContainer>
      <PlusButton handleOnPress={handleShowModal} />
      <UserProfile />
      <ModalPerson
        showModal={showModal}
        handleHideModal={handleHideModal}
        handleSubmit={handleOnSubmit}
      />
    </HeaderContainer>
  );
};
