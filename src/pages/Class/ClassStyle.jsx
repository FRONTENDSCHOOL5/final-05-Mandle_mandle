import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import { HomeNav } from '../../components/Common/TopNav';
import { ClassPost, ClassPostMini } from '../../components/Common/ClassPost';
import MenuBar from '../../components/Common/MenuBar';
import { Link, useLocation } from 'react-router-dom';


// Header
export const HiddenContext = styled.h1`
  ${GlobalStyle}
`;

export function Header() {
  return (
    <HomeNav>
      <HiddenContext>클래스 피드</HiddenContext>
    </HomeNav>
  );
}
// /Header

// Main
export function Main() {
  const location = useLocation();
  const [newClass, setNewClass] = useState([]);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  console.log(token)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.mandarin.weniv.co.kr/product/?limit=Number&skip=Number', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    
      const classes = response.data;
      console.log(classes);
      setNewClass(classes.product);


    } catch (error) {
      console.log("Error", error)
    }
  };


  const teacherClasses = newClass.filter(classItem => String(classItem.author.accountname).includes('Teacher'));
  console.log(teacherClasses)

  return (
    <MainWrap>

      <MiniSection>
        <Title>인기 클래스</Title>
        <MiniList>
          {teacherClasses.map((classItem) => (
            <li key={'classItem._id'}>
              <Link to={`/class/detail/${classItem._id}`}>
                <ClassPostMini
                  miniImg={classItem.itemImage}
                  miniName={classItem.itemName}
                  miniTag={classItem.link}
                />
              </Link>
            </li>
          ))}
        </MiniList>
      </MiniSection>

      <ClassSection>
        <Title>새로운 클래스</Title>
        <ClassList>
          {teacherClasses.map((classItem) => (
            <li key={'classItem._id'}>
              <Link to={`/class/detail/${classItem._id}`}>
                <ClassPost
                  mainImg={classItem.itemImage}
                  title={classItem.itemName}
                  tag={classItem.link}
                />
              </Link>
            </li>
          ))}
        </ClassList>
      </ClassSection>
    </MainWrap>
  );
}

export const MainWrap = styled.main`
  background-color: #f2f2f2;
  box-sizing: border-box;
  overflow-y: scroll;
  height: calc(844px - 60px);
  &::-webkit-scrollbar {
    display: none;
  }
  `;

export const MiniSection = styled.section`
  padding: 20px 0 0 16px;
  height: 190px;
  `

export const ClassSection = styled.section`
  box-sizing: border-box;
  padding: 0 10px 60px;
  margin-top: 30px;
  background-color: #f2f2f2;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  `;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 16px;
  color: #000;
`;

export const MiniList = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  `

export const ClassList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;
// /Main

// Footer
export function Footer() {
  return <MenuBar />;
}
// /Footer
