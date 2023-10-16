import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import useDetectClose from '../../Hooks/useDetectClose';
import GetClassDetailInfoData from '../../api/GetClassDetailInfoData';
// import { PostImagesUpload } from '../../api/PostImagesUpload';
import PutPostEdit from '../../api/PutPostEdit';
import { GetUserProfileImage } from '../../api/GetUserProfileImage';
import { useLocation } from 'react-router-dom';
import { PostImagesUpload } from '../../api/PostImagesUpload';
import useTextareaResize from '../../Hooks/useTextareaResizeHook';

import whiteImg from '../../assets/img/whiteImg.webp';
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  ImageBox,
} from '../../components/Common/Dropdown/Dropdown';
import Dropdown from '../../components/Common/Dropdown/Dropdown';
import DropdownDate from '../../components/Common/Dropdown/DropdownDate';
import { DropdonwTextContainer } from '../../components/Common/Dropdown/DropItem';

import {
  TextInputContainer,
  ImagePreview,
  EditUploadBtnNav,
  ProfileContainer,
  ProfileImage,
  FileUploadButton,
  ImgWrapStyle,
  PreviewImgWrapStyle,
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
  const [classIdentify, setClassIdentify] = useState('클래스 선택하기'); //  선택한 클래스 정보 상태를 담을 status
  const [selectDate, setSelectDate] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [classList, setClassList] = useState([]); // 수강후기를 작성할 클래스 리스트
  const [classImg, setClassImg] = useState(whiteImg);
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserAtom);
  const token = userInfo.token;
  const resInfo = JSON.parse(localStorage.getItem('resInfo'));
  const resData = resInfo && resInfo[userInfo.id] ? resInfo[userInfo.id] : [];

  const classId = resData.map((reservation) => reservation.class_id);
  const classDate = resData.map((reservation) => reservation.reserve_ko_date);
  const classTime = resData.map((reservation) => reservation.reserve_time);

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
            return {
              itemName: data.itemName,
              itemImage: data.itemImage,
              date: classDate[index],
              time: classTime[index],
            };
          })
        );

        // currentDate와 reserveDate를 각각의 인덱스로 비교하여 조건을 추가
        const filteredData = allData.filter(
          //현재 날짜와 비교해서 수강 완료한 클래스만 클래스 리스트에 담기
          (data, index) => currentDate > reserveDate[index]
        );
        setClassList(filteredData);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // 예약 데이터에서 class_id 값을 확인
    const hasClassId = resData.some(
      (reservation) => reservation.class_id != null
    );

    // 만약 class_id 값이 없으면 '/class'로 이동
    if (!hasClassId) {
      alert('먼저 클래스를 수강한 후 후기를 작성해주세요!');
      navigate('/class');
    }
  }, [resData, navigate]);

  useEffect(() => {
    GetUserProfileImage(token, setUserImage);
  }, [token]);

  useEffect(() => {
    GetUserProfileImage(token, setUserImage);
  }, [token]);
  useEffect(() => {
    if (post.image) {
      setSelectedImages(post.image.split(','));
      setPreviewImages(post.image.split(','));
    }
    if (post.content) {
      setInputValue(post.content);
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
        alert('이미지는 최대 3개까지 업로드가 가능합니다.');
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
    const editedPost = await PutPostEdit(
      postId,
      token,
      inputValue,
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
          value={inputValue}
        ></TextInputContainer>
        <ImgWrapStyle>
          {selectedImages.map((image, index) => (
            <PreviewImgWrapStyle key={index}>
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
            </PreviewImgWrapStyle>
          ))}
        </ImgWrapStyle>
        <FileUploadButton handleImageChange={handleImageChange} />
      </PostFormStyle>
    </div>
  );
}
