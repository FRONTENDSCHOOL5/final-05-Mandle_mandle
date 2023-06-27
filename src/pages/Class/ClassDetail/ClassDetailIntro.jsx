import React from 'react'
import { ClassIntroSection, ClassNav, ClassWrap, ExplainP, ClassExplainImg } from './ClassDetailIntroStyle'
import ExplainImg from '../../../assets/img/temp/soapT5.png';

export default function ClassDetailIntro() {
  return (
    <ClassIntroSection>
      <ClassNav>
        <li>
          <a href='#class-intro'>클래스 소개</a>
        </li>
        <li>
          <a href='#class-location'>장소</a>
        </li>
        <li>
          <a href='#class-review'>후기</a>
        </li>
      </ClassNav>
      <ClassWrap>
        <h3 className='a11y-hidden'>클래스 소개</h3>
        <ExplainP>
          안녕하세요 저희 클래스는 본인의 취향에 맞춰..............
        </ExplainP>
        <ClassExplainImg src={ExplainImg} alt='비누 만드는 클래스의 모습' />
      </ClassWrap>
    </ClassIntroSection>
  )
}