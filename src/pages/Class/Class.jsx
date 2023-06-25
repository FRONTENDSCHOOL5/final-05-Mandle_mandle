import { React, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { HomeNav } from '../../components/Common/TopNav';
import { ClassPost, ClassPostMini } from '../../components/Common/ClassPost';
import MenuBar from '../../components/Common/MenuBar';
import { Link } from 'react-router-dom';
import { HiddenContext, MainWrap, MiniSection, ClassSection, Title, MiniList, ClassList } from './ClassStyle';
import GetClassData from '../../api/GetClassData'


export default function Class() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

// Header
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
  const [newClass, setNewClass] = useState([]);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassData(token);
        setNewClass(data.product);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [token]);

  // useraccoutn에 Teacher문자가 포함된 것만 출력
  const classList = newClass.filter(classItem => String(classItem.author.accountname).includes('Teacher'));

  return (
    <MainWrap>

      <MiniSection>
        <Title>인기 클래스</Title>
        <MiniList>
          {classList.map((classItem) => (
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
          {classList.map((classItem) => (
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

export function Footer() {
  return <MenuBar />;
}