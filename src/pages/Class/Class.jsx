import React, { useEffect, useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { HomeNav } from '../../components/Common/TopNav';
import { ClassPost, ClassPostMini } from '../../components/Common/ClassPost';
import MenuBar from '../../components/Common/MenuBar';
import { Link } from 'react-router-dom';
import { HiddenContext, MainWrap, MiniSection, ClassSection, Title, MiniList, ClassList } from './ClassStyle';
import GetClassData from '../../api/GetClassData';
import ClassSkeleton from '../../components/Common/Skeleton/ClassSkeleton';

export default function Class() {
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;
  const [loading, setLoading] = useState(true);
  const [popularClasses, setPopularClasses] = useState([]);
  const [newClasses, setNewClasses] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  const mainWrapRef = useRef(null); // Create a ref for the MainWrap element

  const handleScroll = () => {
    if (mainWrapRef.current) {
      const bottom = mainWrapRef.current.scrollHeight - mainWrapRef.current.scrollTop === mainWrapRef.current.clientHeight;

      if (bottom) {
        setPage(page + 1); // Increment the page
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassData(token, page);
        const filteredClasses = data.product.filter(classItem => classItem.author.accountname.includes('Teacher'));

        if (page === 1) {
          setPopularClasses(filteredClasses.slice(0, 3));
          setNewClasses(filteredClasses.slice(0, 8));
        } else {
          const startIndex = (page - 2) * 2 + 8; // Calculate the starting index
          setNewClasses(prevClasses => [
            ...prevClasses,
            ...filteredClasses.slice(startIndex, startIndex + 2) // Add 2 new classes
          ]);
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
  }, [token, page]);

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
        )}
      </MainWrap>
      <MenuBar />
    </>
  );
}
