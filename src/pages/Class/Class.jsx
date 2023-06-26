import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { HomeNav } from '../../components/Common/TopNav';
import { ClassPost, ClassPostMini } from '../../components/Common/ClassPost';
import MenuBar from '../../components/Common/MenuBar';
import { Link } from 'react-router-dom';
import { HiddenContext, MainWrap, MiniSection, ClassSection, Title, MiniList, ClassList } from './ClassStyle';
import GetClassData from '../../api/GetClassData';
import Loading from '../Loading/Loading';

export default function Class() {
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  const [loading, setLoading] = useState(true);
  const [popularClasses, setPopularClasses] = useState([]);
  const [newClasses, setNewClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassData(token);
        const filteredClasses = data.product.filter(classItem => classItem.author.accountname.includes('Teacher'));
        const popularClasses = filteredClasses.slice(0, 3);
        setPopularClasses(popularClasses);
        setNewClasses(filteredClasses);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HomeNav title={'클래스'}>
            <HiddenContext>클래스 피드</HiddenContext>
          </HomeNav>
          <MainWrap>
            <>
              <MiniSection>
                <Title>인기 클래스</Title>
                <MiniList>
                  {popularClasses.map(classItem => (
                    <li key={classItem._id}>
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
                  {newClasses.map(classItem => (
                    <li key={classItem._id}>
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
            </>
          </MainWrap>
          <MenuBar />
        </>
      )}
    </>
  );
}
