import { React, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../../Store/userInfoAtoms';
import { MiniSection, Title, MiniList } from './ClassDetailOtherClassStyle';
import { ClassPostMini } from '../../../components/Common/ClassPost';
import GetClassData from '../../../api/GetClassData';

// Other Class

export default function ClassDetailOtherClass() {
  const [newClass, setNewClass] = useState([]);
  const UserInfo = useRecoilValue(UserAtom);
  const token = UserInfo.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetClassData(token, UserInfo.accountname);
        setNewClass(data.product);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  });

  const classList = newClass.filter(classItem => String(classItem.author.accountname).includes('Teacher'));

  return (
    <MiniSection>
      <Title>다른 클래스</Title>
      <MiniList>
        {classList.map(classItem => (
          <li key={classItem._id}>
            <a href={`/class/detail/${classItem._id}`}>
              <ClassPostMini
                miniImg={classItem.itemImage}
                miniName={classItem.itemName}
                miniTag={classItem.link}
              />
            </a>
          </li>
        ))}
      </MiniList>
    </MiniSection>
  );
}


// /Other Class
// /Main

