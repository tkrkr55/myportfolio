import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillGithub} from 'react-icons/ai';
import {SiTistory} from 'react-icons/si';
export default function MyInfoPage() {
  const url = 'https://github.com/tkrkr55'
  const tistory = 'https://hyeru.tistory.com/'
  return (
    <div>
      <h2 className='text-focus-in'> " 시간을 허투루 쓰지 않는 노력하는 <strong>인재</strong>  입니다. " </h2>
     <Container>
      <Row className='mycard'>
        <Col lg={4}>
          <img className='my' src='/images/내사진.jpg'></img>
        </Col>
        <Col lh={8}> 
        <h4 style={{color:"green"}}> 👩 MyInfo</h4>
        <div>Name : 김혜인 (KIM HYE IN) </div>
        <div>Phone : 010-7485-3707</div>
        <div>Address : 경기도 성남시 중원구 광명로 176 하늘채 아파트</div>
        <div>Email : tkrkr55@naver.com</div>
        <div> Git-hup : <button onClick={()=>{window.open(url)}}><AiFillGithub/></button></div>
        <div> Tistory : <button onClick={()=>{window.open(tistory)}}><SiTistory/></button></div>
        </Col>
      </Row>
      </Container>

      <Container>
      <Row className='mycard'>
        <Col lg={8}>
        <h4 style={{color:"green"}}> 🌈 My Career</h4>
        
        <div>세무회계 테헤란 : 2021-02 ~ 2022-02 세무 기장 신고 (사원)</div>
        <div>마이에스앤씨 : 2017-11 ~ 2020-08 Autodesk 경영지원 & 기술지원 (대리)</div>
        <div>SK렌터카 : 2016-03 ~ 2016-10 채권관리팀 (인턴 계약직)</div>
        <div>University :  2014-03 ~ 2016-02 동서울대학교 (컴퓨터 정보과) </div>
        <div>High School : 2011-02 ~ 2014-02 성일정보고등학교 (디지털 정보과)</div>
        <div>자격증 취득 사항  : GTQ 포토샵 1급 , ITQ(엑셀,한글,파워포인트) A등급 ,전산세무 1급,전산회계 2급,FAT 1급</div>
       
       
        
        </Col>
        <Col lh={4}> 
       
        <img className='my' src='/images/내사진2.jpg'></img>
        </Col>
      </Row>
      </Container>
    </div>
  )
}
