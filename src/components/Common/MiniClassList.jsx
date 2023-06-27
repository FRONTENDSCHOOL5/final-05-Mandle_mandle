import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Common/Modal/Modal';
import ModalAlert from './Modal/ModalAlert/ModalAlert';
import DeleteClass from '../../api/DeleteClass';
import { useNavigate } from 'react-router-dom';
function MiniClassList({ classItem, page, token, setClassUpdated }) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (page === 'profile') {
      setModalOpen(true);
    } else {
      navigate(`/class/detail/${classItem.id}`);
    }
  };

  const handleDeleteSubmit = async () => {
    const response = await DeleteClass(classItem.id, token); // Call the API component
    if (response) {
      setAlertModalOpen(false);
      alert(`해당 게시글이 삭제되었습니다.`);

      setClassUpdated(true); // 새로고침(상태변경으로 바꿀 예정)
    }
  };

  const handleMoveClassDetail = () => {
    navigate(`/class/detail/${classItem.id}`);
  };

  return (
    <>
      <ClassButtonWrap onClick={handleClick}>
        <ClassImage src={classItem.itemImage} alt={classItem.itemName} />
        <ClassDescription>{classItem.link}</ClassDescription>
        <ClassTitle>{classItem.itemName}</ClassTitle>
      </ClassButtonWrap>

      {isModalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          setAlertModalOpen={setAlertModalOpen}
          onClick={handleMoveClassDetail}
          type='class'
          text='삭제'
        />
      )}
      {alertModalOpen && (
        <ModalAlert
          setAlertModalOpen={setAlertModalOpen}
          onClick={handleDeleteSubmit}
        />
      )}
    </>
  );
}

export default MiniClassList;

const ClassButtonWrap = styled.button`
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
`;

const ClassImage = styled.img`
  width: 140px;
  aspect-ratio: 140 / 90;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const ClassDescription = styled.p`
  font-size: 12px;
  color: var(--sub-font-color);
  margin: 6px 0 7px 4px;
`;

const ClassTitle = styled.p`
  font-size: var(--font-md);
  font-weight: normal;
  color: #000;
  width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 6px 0 7px 4px;
`;
