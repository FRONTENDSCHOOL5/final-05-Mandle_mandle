import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import useDetectClose from '../../Hooks/useDetectClose';
import useTextareaResize from '../../Hooks/useTextareaResizeHook';
import GetClassDetailInfoData from '../../api/GetClassDetailInfoData';
import PutPostEdit from '../../api/PutPostEdit';
import { GetUserProfileImage } from '../../api/GetUserProfileImage';
import { PostImagesUpload } from '../../api/PostImagesUpload';
import { ClassData } from '../Profile/MyProfile';
import whiteImg from '../../assets/img/whiteImg.webp';
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  TeacherDropdown,
  ImageBox,
} from '../../components/Common/Dropdown/Dropdown';
import Dropdown from '../../components/Common/Dropdown/Dropdown';
import DropdownDate from '../../components/Common/Dropdown/DropdownDate';
import DropdownTag from '../../components/Common/Dropdown/DropdownTag';
import { DropdonwTextBox } from '../../components/Common/Dropdown/DropItem';
import { Toast } from '../../components/Common/Toast/Toast';
import {
  TextInputBox,
  ImagePreview,
  EditUploadBtnNav,
  ProfileContainer,
  ProfileImage,
  FileUploadButton,
  ImgList,
  PreviewImgItem,
  DeleteImgBtn,
  PostFormStyle,
} from './PostingStyle';

export default function EditPost() {
  const location = useLocation();
  const post = location.state || {};
  const postId = post.id;
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);
  const [userImage, setUserImage] = useState('');
  const [classIdentify, setClassIdentify] = useState('수정할 클래스 선택하기'); //  선택한 클래스 정보 상태를 담을 status
  const [selectDate, setSelectDate] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [selectId, setSelectId] = useState('');
  const [classList, setClassList] = useState([]); // 수강후기를 작성할 클래스 리스트
  const [classImg, setClassImg] = useState(whiteImg);
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const userAccountname = userInfo.accountname;
  const token = userInfo.token;
  const resInfo = JSON.parse(localStorage.getItem('resInfo'));
  const resData = resInfo && resInfo[userInfo.id] ? resInfo[userInfo.id] : [];
  const [toastMessage, setToastMessage] = useState('');
  const classId = resData.map((reservation) => reservation.class_id);
  const classDate = resData.map((reservation) => reservation.reserve_ko_date);
  const classTime = resData.map((reservation) => reservation.reserve_time);
  const [TeacherData, setTeacherData] = useState(null);
  const [classTag, setClassTag] = useState('');
  const [classPrice, setClassPrice] = useState('');
  const postInfo = post.content;
  let parsedData;
  try {
    parsedData = JSON.parse(postInfo);
  } catch (error) {
    // JSON 파싱에 실패한 경우, 그냥 postInfo를 사용
    parsedData = { inputValue: postInfo }; // 또는 원하는 대체 내용을 설정
  }

  const currentDate = new Date();
  function parseReserveDate(dateStr) {
    const regex = /(\w+), (\w+ \d{1,2}, \d{4}), (\d+) (AM|PM) GMT\+9/;
    const matches = dateStr.match(regex);
    if (matches) {
      const [, , baseDate, hour, meridiem] = matches;
      let convertedHour = parseInt(hour, 10);
      if (meridiem === 'PM' && convertedHour !== 12) {
        convertedHour += 12;
      } else if (meridiem === 'AM' && convertedHour === 12) {
        convertedHour = 0;
      }
      const formattedDate = `${baseDate} ${convertedHour}:00:00 GMT+0900`;
      return new Date(formattedDate);
    }
    // 일치하지 않는 경우, 올바르지 않은 날짜 형식이거나 예상치 못한 경우입니다.
    console.error('Invalid date format:', dateStr);
    return null;
  }

  const reserveDate = resData.map((reservation) =>
    parseReserveDate(reservation.reserve_common_date)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await Promise.all(
          classId.map(async (id, index) => {
            const data = await GetClassDetailInfoData(id, token);
            const classInfo = {
              itemName: data.itemName,
              itemImage: data.itemImage,
              date: classDate[index],
              time: classTime[index],
              classId: id,
            };
            return classInfo;
          })
        );

        // currentDate와 reserveDate를 각각의 인덱스로 비교하여 조건을 추가
        const filteredData = allData.filter(
          // 현재 날짜와 비교해서 수강 완료한 클래스만 클래스 리스트에 담기
          (data, index) => currentDate > reserveDate[index]
        );
        setClassList(filteredData);
      } catch (error) {
        console.log('Error', error);
      }

      const TClassData = await ClassData(userAccountname, token);
      console.log(TClassData);
      setTeacherData(TClassData);
    };
    console.log(selectId);
    fetchData();
  }, []);

  useEffect(() => {
    GetUserProfileImage(token, setUserImage);
  }, [token]);

  useEffect(() => {
    if (post.image) {
      setSelectedImages(post.image.split(','));
      setPreviewImages(post.image.split(','));
    }
    if (parsedData.inputValue) {
      setInputValue(parsedData.inputValue);
    }
  }, [post.image, post.content]);

  const { textarea, handleTextareaChange } = useTextareaResize(
    inputValue,
    setInputValue
  );
  useEffect(() => {
    if (inputValue || selectedImages.length > 0) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  }, [inputValue, selectedImages]);

  const handleImageChange = async (event) => {
    const files = await event.target.files[0];

    try {
      const imageUrl = await PostImagesUpload(files);
      setSelectedImages((prevImages) => [...prevImages, imageUrl]);
      const imagesArray = [...selectedImages, imageUrl];
      if (imagesArray.length > 3) {
        setToastMessage('이미지는 최대 3개까지 업로드가 가능합니다.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImages([...previewImages, reader.result]);
      };
      reader.readAsDataURL(files);
    } catch (error) {
      // 오류 처리
      console.error(error);
    }
  };

  const handleUploadPost = async () => {
    const classData = {
      inputValue,
      classImg,
      classIdentify,
      ...(selectDate && selectTime
        ? { selectDate, selectTime }
        : { classTag, classPrice }),
      selectId,
    };
    console.log(classData);
    const classReview = JSON.stringify(classData);
    const editedPost = await PutPostEdit(
      postId,
      token,
      classReview,
      selectedImages.join(',')
    );

    if (editedPost) {
      setInputValue('');
      setSelectedImages([]);
      navigate(`/post/${postId}`, {
        state: postId,
      });
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  function removeAfterAt(string) {
    if (string.includes('@')) {
      return string.split('@')[0];
    } else {
      return string;
    }
  }

  return (
    <div>
      <EditUploadBtnNav
        handleUploadPost={handleUploadPost}
        buttonStyle={buttonStyle}
        post={post}
        currContent={inputValue}
        currImg={selectedImages}
      />
      <ProfileContainer>
        <ProfileImage src={userImage} alt='유저 프로필 이미지' />
      </ProfileContainer>
      {userAccountname.includes('Teacher') ? (
        //  (강사용 드롭다운)
        <DropdownContainer ref={dropDownRef}>
          <DropdownButton onClick={() => setIsOpen(!isOpen)} type='button'>
            <ImageBox src={classImg} />
            <DropdonwTextBox>
              {classIdentify}
              {classTag && classPrice ? (
                <DropdownTag classTag={classTag} price={classPrice} />
              ) : null}
            </DropdonwTextBox>
          </DropdownButton>
          {isOpen && (
            <DropdownList>
              {TeacherData.product &&
                TeacherData.product.map((item, index) => (
                  <TeacherDropdown
                    key={index}
                    id={item.id}
                    img={item.itemImage}
                    price={item.price + '원'}
                    value={item.itemName}
                    token={token}
                    classTag={removeAfterAt(item.link)}
                    isOpen={isOpen}
                    setClassIdentify={setClassIdentify}
                    setClassImg={setClassImg}
                    setSelectId={setSelectId}
                    setClassTag={setClassTag}
                    setIsOpen={setIsOpen}
                    setPrice={setClassPrice}
                  />
                ))}
              ;
            </DropdownList>
          )}
        </DropdownContainer>
      ) : (
        //  (수강생용 드롭다운)
        <DropdownContainer ref={dropDownRef}>
          <DropdownButton onClick={() => setIsOpen(!isOpen)} type='button'>
            <ImageBox src={classImg} alt='수강 클래스 이미지' />
            <DropdonwTextBox>
              {classIdentify}
              {selectDate && selectTime ? (
                <DropdownDate date={selectDate} time={selectTime} />
              ) : null}
            </DropdonwTextBox>
          </DropdownButton>
          {isOpen && (
            <DropdownList>
              {classList.map((item, index) => (
                <Dropdown
                  key={index}
                  value={item.itemName}
                  date={item.date}
                  time={item.time}
                  img={item.itemImage}
                  setIsOpen={setIsOpen}
                  setClassIdentify={setClassIdentify}
                  isOpen={isOpen}
                  setClassImg={setClassImg}
                  setSelectDate={setSelectDate}
                  setSelectTime={setSelectTime}
                  id={item.classId}
                  setSelectId={setSelectId}
                />
              ))}
            </DropdownList>
          )}
        </DropdownContainer>
      )}
      <PostFormStyle>
        <TextInputBox
          placeholder='게시글 입력하기..'
          onChange={handleTextareaChange}
          ref={textarea}
          value={inputValue}
        ></TextInputBox>
        <ImgList>
          {selectedImages.map((image, index) => (
            <PreviewImgItem key={index}>
              <ImagePreview
                src={
                  typeof image === 'string' ? image : URL.createObjectURL(image)
                }
                alt={`게시물 이미지 ${index + 1}`}
              />
              <DeleteImgBtn
                onClick={() => handleDeleteImage(index)}
                type='button'
              />
            </PreviewImgItem>
          ))}
        </ImgList>
        <FileUploadButton handleImageChange={handleImageChange} />
      </PostFormStyle>

      {toastMessage && (
        <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
      )}
    </div>
  );
}
