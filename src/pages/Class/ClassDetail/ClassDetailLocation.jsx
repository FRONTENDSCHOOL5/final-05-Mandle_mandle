import React from 'react'
import { ClassWrap, ClassLocSection, LocAddress } from './ClassDetailLocationStyle'
import location from '../../../assets/img/temp/location.png'

export default function ClassDetailLocation() {
  return (
    <ClassLocSection id='class-location'>
      <ClassWrap>
        <h3>장소</h3>
        <img src={location} alt="지도 위치" />
        <LocAddress>
          서울특별시 관악구 봉천동 911-11 (2층)
        </LocAddress>
      </ClassWrap>
    </ClassLocSection>
  )
}
