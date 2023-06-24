import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import ClassImg from '../../assets/img/temp/candleT1.png';

function MiniClassList({ classData }) {
  console.log(classData);
  return (
    <ClassSection>
      <Title>클래스 리스트</Title>
      <ClassList>
        {classData.product &&
          classData.product.map((item) => (
            <li key={item.id}>
              <a href={item.link}>
                <Class>
                  <ClassImage src={item.itemImage} alt={item.itemName} />
                  <ClassDescription>{item.link}</ClassDescription>
                  <ClassTitle>{item.itemName}</ClassTitle>
                </Class>
              </a>
            </li>
          ))}
      </ClassList>
    </ClassSection>
  );
}

export default MiniClassList;

const ClassSection = styled.section`
  box-sizing: border-box;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: var(--font-md);
  margin-bottom: 16px;
`;

const Class = styled.article`
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

const ClassTitle = styled.h3`
  font-size: var(--font-md);
  font-weight: normal;
  color: #000;
  width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 6px 0 7px 4px;
`;

const ClassList = styled.ul`
  padding: 0 0 10px 0;
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;
