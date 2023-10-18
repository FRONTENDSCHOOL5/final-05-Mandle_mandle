import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../../components/Common/Dropdown/Dropdown';
import useDetectClose from '../../Hooks/useDetectClose';
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  ImageBox,
} from '../../components/Common/Dropdown/Dropdown';
import DropdownDate from '../../components/Common/Dropdown/DropdownDate';
import { DropdonwTextContainer } from '../../components/Common/Dropdown/DropItem';
import {
  DisabledUploadBtnNav,
  ProfileContainer,
  ProfileImage,
  FileUploadButton,
  ImgWrapStyle,
  PreviewImgWrapStyle,
  DeleteImgBtn,
  PostFormStyle,
  ImagePreview,
  TextInputContainer,
} from './PostingStyle';
import whiteImg from '../../assets/img/whiteImg.webp';

import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { PostImagesUpload } from '../../api/PostImagesUpload';
import { useNavigate } from 'react-router-dom';
import PostUploadPost from '../../api/PostUploadPost';
import { GetUserProfileImage } from '../../api/GetUserProfileImage';
import imageCompression from 'browser-image-compression';
import useTextareaResize from '../../Hooks/useTextareaResizeHook';
import GetClassDetailInfoData from '../../api/GetClassDetailInfoData';
import { Toast } from '../../components/Common/Toast/Toast';
export default function Posting() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [buttonStyle, setButtonStyle] = useState(false);
  const [userImage, setUserImage] = useState('');

  const userInfo = useRecoilValue(UserAtom);
  const resInfo = JSON.parse(localStorage.getItem('resInfo'));
  const resData = resInfo && resInfo[userInfo.id] ? resInfo[userInfo.id] : [];

  const dropDownRef = useRef();
  const [classIdentify, setClassIdentify] = useState('클래스 선택하기'); //  선택한 클래스 정보 상태를 담을 status
  const [selectDate, setSelectDate] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [selectId, setSelectId] = useState('');
  const [classList, setClassList] = useState([]); // 수강후기를 작성할 클래스 리스트
  const [classImg, setClassImg] = useState(whiteImg);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();
  const token = userInfo.token;

  const classId = resData.map((reservation) => reservation.class_id);
  const classDate = resData.map((reservation) => reservation.reserve_ko_date);
  const classTime = resData.map((reservation) => reservation.reserve_time);

  // 현재 날짜 및 시간 가져오기
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
    parseReserveDate(reservation.reserve_common_date),
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
          }),
        );

        // currentDate와 reserveDate를 각각의 인덱스로 비교하여 조건을 추가
        const filteredData = allData.filter(
          // 현재 날짜와 비교해서 수강 완료한 클래스만 클래스 리스트에 담기
          (data, index) => currentDate > reserveDate[index],
        );
        setClassList(filteredData);
      } catch (error) {
        console.log('Error', error);
      }
    };
    console.log(selectId);
    fetchData();
  }, []);

  useEffect(() => {
    // 예약 데이터에서 class_id 값을 확인
    const hasClassId = resData.some(
      (reservation) => reservation.class_id != null,
    );

    // 만약 class_id 값이 없으면 '/class'로 이동
    if (!hasClassId) {
      setToastMessage('먼저 클래스를 수강한 후 후기를 작성해주세요!');
      navigate('/class');
    }
  }, []);

  useEffect(() => {
    GetUserProfileImage(token, setUserImage);
  }, [token]);

  const { textarea, handleTextareaChange } = useTextareaResize(
    inputValue,
    setInputValue,
  );

  useEffect(() => {
    if (inputValue || selectedImages.length > 0) {
      setButtonStyle(true);
    } else {
      setButtonStyle(false);
    }
  }, [inputValue, selectedImages]);

  const handleImageChange = async (event) => {
    const files = event.target.files;
    let imagesArray = [...selectedImages];
    if (imagesArray.length + files.length > 3) {
      setToastMessage('이미지는 최대 3개까지 업로드가 가능합니다.');
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.size > 1024 * 1024 * 10) {
        setToastMessage('10MB 이상의 이미지는 업로드 할 수 없습니다.');
        return;
      }
      if (!file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
        setToastMessage('이미지 파일만 업로드가 가능합니다.');
        return;
      }

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        const convertedFile = new File([compressedFile], file.name, {
          type: file.type,
        });
        imagesArray.push(convertedFile);
      } catch (error) {
        console.log(error);
      }
    }

    setSelectedImages(imagesArray);
  };

  const handleUploadPost = async () => {
    const images = await PostImagesUpload(selectedImages);

    const classData = {
      inputValue,
      classImg,
      classIdentify,
      selectDate,
      selectTime,
      selectId,
    };

    console.log(classData);

    const classReview = JSON.stringify(classData);

    const response = await PostUploadPost(token, classReview, images);
    if (response) {
      setInputValue('');
      setSelectedImages([]);
      navigate(`/post/${response.post.id}`, {
        state: response.post.id,
      });
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div>
      <DisabledUploadBtnNav
        handleUploadPost={handleUploadPost}
        buttonStyle={buttonStyle}
      />
      <ProfileContainer>
        <ProfileImage src={userImage} alt='유저 프로필 이미지' />
      </ProfileContainer>
      <DropdownContainer ref={dropDownRef}>
        <DropdownButton onClick={() => setIsOpen(!isOpen)} type='button'>
          <ImageBox src={classImg} />
          <DropdonwTextContainer>
            {classIdentify}
            {selectDate && selectTime ? (
              <DropdownDate date={selectDate} time={selectTime} />
            ) : null}
          </DropdonwTextContainer>
        </DropdownButton>
        {isOpen && (
          <DropdownMenu>
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
          </DropdownMenu>
        )}
      </DropdownContainer>
      <PostFormStyle>
        <TextInputContainer
          placeholder='게시글 입력하기..'
          onChange={handleTextareaChange}
          ref={textarea}
        ></TextInputContainer>

        <ImgWrapStyle>
          {selectedImages.map((image, index) => (
            <PreviewImgWrapStyle key={index}>
              <ImagePreview
                src={URL.createObjectURL(image)}
                alt={`게시글 이미지 ${index + 1}`}
              />
              <DeleteImgBtn
                onClick={() => handleDeleteImage(index)}
                type='button'
              />
            </PreviewImgWrapStyle>
          ))}
        </ImgWrapStyle>
        <FileUploadButton handleImageChange={handleImageChange} />
      </PostFormStyle>{' '}
      {toastMessage && (
        <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
      )}
    </div>
  );
}
