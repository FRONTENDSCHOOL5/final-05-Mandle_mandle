import React, { useEffect, useState, useRef } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { HomeNav } from '../../components/Common/TopNav';
import { ClassPost, ClassPostMini } from '../../components/Common/ClassPost';
import MenuBar from '../../components/Common/MenuBar';
import { Link } from 'react-router-dom';
import { HiddenContext, MainWrap, MiniSection, ClassSection, Title, MiniList, ClassList } from './ClassStyle';
import GetClassData from '../../api/GetClassData';
import ClassSkeleton from '../../components/Common/Skeleton/ClassSkeleton';
import { atom } from 'recoil';

// atom 분리하기
export const ClassDataAtom = atom({
  key: 'classData',
  default: {
    popularClasses: [],
    newClasses: [],
    page: 1,
  },
});

export default function Class() {
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  const [loading, setLoading] = useState(true);

  const mainWrapRef = useRef(null);

  const [classData, setClassData] = useRecoilState(ClassDataAtom);

  const handleScroll = () => {
    if (mainWrapRef.current) {
      const bottom =
        mainWrapRef.current.scrollHeight -
        mainWrapRef.current.scrollTop ===
        mainWrapRef.current.clientHeight;

      if (bottom) {
        setClassData((prevClassData) => ({
          ...prevClassData,
          page: prevClassData.page + 1,
        }));
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassData(token, classData.page); 
        const filteredClasses = data.product.filter(classItem => classItem.author.accountname.includes('Teacher'));

        if (classData.page === 1) {
          setClassData({
            ...classData,
            popularClasses: filteredClasses.slice(0, 3),
            newClasses: filteredClasses.slice(0, 8),
          });
        } else {
          const startIndex = (classData.page - 1) * 8;
          setClassData((prevClassData) => ({
            ...prevClassData,
            newClasses: [
              ...prevClassData.newClasses,
              ...filteredClasses.slice(startIndex, startIndex + 8)
            ],
          }));
        }

        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    };

    fetchData();

    if (mainWrapRef.current) {
      mainWrapRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainWrapRef.current) {
        mainWrapRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [token, classData.page, setClassData]);

  return (
    <>
      <HomeNav title={'클래스'}>
        <HiddenContext>클래스 피드</HiddenContext>
      </HomeNav>
      <MainWrap ref={mainWrapRef}>
        {loading ? (<ClassSkeleton />) : (
          <>
            <MiniSection>
              <Title>인기 클래스</Title>
              <MiniList>
                {classData.popularClasses.map(classItem => {
                  const parts = classItem.link.split('@');
                  const truncatedLink = parts[0] || '';
                  return (
                    <li key={classItem._id}>
                      <Link to={`/class/detail/${classItem._id}`}>
                        <ClassPostMini
                          miniImg={classItem.itemImage}
                          miniName={classItem.itemName}
                          miniTag={truncatedLink}
                        />
                      </Link>
                    </li>
                  );
                })}
              </MiniList>
            </MiniSection>

            <ClassSection>
              <Title>새로운 클래스</Title>
              <ClassList>
                {classData.newClasses.map(classItem => {
                  const parts = classItem.link.split('@');
                  const truncatedLink = parts[0] || '';
                  return (
                    <li key={classItem._id}>
                      <Link to={`/class/detail/${classItem._id}`}>
                        <ClassPost
                          mainImg={classItem.itemImage}
                          title={classItem.itemName}
                          tag={truncatedLink}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ClassList>
            </ClassSection>
          </>
        )}
      </MainWrap>
      <MenuBar />
    </>
  );
}
