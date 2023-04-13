import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function SkilPage() {
  return (
  <>
  <Container className='react_box'>
    <Row>
      <Col lg={2}> <PieChart className='react_box'
  data={[
    { name: "name1", value: 70, color: '#838bb2' },
  ]}
  reveal={70} //퍼센트 치수
  lineWidth={18} 도넛 두께
  background='#f3f3f3'
  lengthAngle={360}
  rounded
  animate
  label={({dataEntry})=> dataEntry.value + "%"}
  labelStyle={{
    fontSize: "18px",
    fill: "#333333",
    }}
    labelPosition={0}
 
/>
</Col>
      <Col lg={8} className='react_boxs'>
        <h1>React</h1>
        <ul>
          <li> <strong>React ES6 문법</strong>을 사용할 수 있습니다.</li>
          <li><strong> React-bootstrap</strong> 라이브러리를 통해 디자인 구현이 가능 합니다.</li>
          <li><strong>React-Router 의 BrowserRouter </strong>  을 통한 사용자가 요청한 URL 페이지를 보여줄 수 있습니다.</li>
          <li><strong>Redux-toolkit</strong>  을 통해 state 전역 관리 상태에 대한 사용 및 이해도가 있습니다.</li>
          <li><strong>useEffect를</strong>  통해 비동기 작업으로 api 를 호출하고 데이터를 렌더링 할 수 있습니다.</li>
          <li><strong>axios </strong> 를 통해 CRUD ( get,post,put,delet ) 사용법을 숙지 하였습니다.</li>
        </ul>
      </Col>
    </Row>
  </Container>

  <Container className='react_box'>
    <Row>
      <Col lg={2}> <PieChart className='react_box'
  data={[
    { name: "name1", value: 60, color: '#eadb80' },
  ]}
  reveal={60} //퍼센트 치수
  lineWidth={18} 도넛 두께
  background='#f3f3f3'
  lengthAngle={360}
  rounded
  animate
  label={({dataEntry})=> dataEntry.value + "%"}
  labelStyle={{
    fontSize: "18px",
    fill: "#333333",
    }}
    labelPosition={0}
 
/>
</Col>
      <Col lg={8} className='react_boxs'>
        <h1>Javascript</h1>
        <ul>
          <li> <strong>var let const </strong>에 대한 기본문법을 숙지 하고 있습니다.</li>
          <li> <strong>호이스팅 </strong>에 대한 이론을 숙지하고 있습니다.</li>
          <li> <strong>for문 while 문</strong>에 대한 반복문을 사용할 수 있습니다.</li>
          <li> <strong>DOM 을 이용한 이벤트 처리기 외 이벤트 </strong>에 대한 사용법을 숙지 하고 있습니다.</li>
          <li> <strong>JS 객체(내장객체, 문서객체모델,브라우저 관련객체)</strong>에 대한 사용법을 알고 있습니다.</li>

        </ul>
      </Col>
    </Row>
  </Container>
  <Container className='react_box'>
    <Row>
      <Col lg={2}> <PieChart className='react_box'
  data={[
    { name: "name1", value: 60, color: '#ff9100' },
  ]}
  reveal={60} //퍼센트 치수
  lineWidth={18} 도넛 두께
  background='#f3f3f3'
  lengthAngle={360}
  rounded
  animate
  label={({dataEntry})=> dataEntry.value + "%"}
  labelStyle={{
    fontSize: "18px",
    fill: "#333333",
    }}
    labelPosition={0}
 
/>
</Col>
      <Col lg={8} className='react_boxs'>
        <h1>HTML</h1>
        <ul>
          <li> <strong>기본적인 HTML 태그 </strong>사용이 가능 합니다.</li>
          <li> <strong>블럭요소 와 인라인요소 </strong>에 대한 사용방법을 숙지하고 있습니다.</li>
          <li> <strong>태그 구조와 속성</strong>에 전반적인 이해를 갖고 있습니다.</li>
          <li> <strong>HTML 파일의 구조 </strong>에 대한 이해도가 있습니다.</li>
          <li> <strong>기본적인 HTML 태그를 활용해 </strong>웹 사이트를 만들 수 있습니다.</li>

        </ul>
      </Col>
    </Row>
  </Container>
  <Container className='react_box'>
    <Row>
      <Col lg={2}> <PieChart className='react_box'
  data={[
    { name: "name1", value: 75, color: '#83b1c9' },
  ]}
  reveal={75} //퍼센트 치수
  lineWidth={18} 도넛 두께
  background='#f3f3f3'
  lengthAngle={360}
  rounded
  animate
  label={({dataEntry})=> dataEntry.value + "%"}
  labelStyle={{
    fontSize: "18px",
    fill: "#333333",
    }}
    labelPosition={0}
 
/>
</Col>
      <Col lg={8} className='react_boxs'>
        <h1>CSS</h1>
        <ul>
          <li> <strong>CSS 기본문법 </strong>을 숙지하고 있습니다.</li>
          <li><strong> CSS 선언방식 </strong>에 대한 이해도가 있습니다.</li>
          <li><strong>CSS 를 이용한 기본적인  웹 사이트 디자인 </strong>을 할 수 있습니다. </li>

        </ul>
      </Col>
    </Row>
  </Container>

  <Container className='react_box'>
    <Row>
      <Col lg={2}> <PieChart className='react_box'
  data={[
    { name: "name1", value: 70, color: '#cfdd8e' },
  ]}
  reveal={70} //퍼센트 치수
  lineWidth={18} 도넛 두께
  background='#f3f3f3'
  lengthAngle={360}
  rounded
  animate
  label={({dataEntry})=> dataEntry.value + "%"}
  labelStyle={{
    fontSize: "18px",
    fill: "#333333",
    }}
    labelPosition={0}
 
/>
</Col>
      <Col lg={8} className='react_boxs'>
        <h1>git-hup</h1>
        <ul>
          <li> <strong>git-hup 로 저장소 생성 후 commit push </strong>을 사용해 보았습니다.</li>
          <li><strong> sourcetree 를 사용한 </strong> git-hup 저장소 연결 후 branch를 사용해 보았습니다.</li>
          <li><strong>git-flow를  </strong>사용해 보며 독립적인 브랜치 생성 후 안전하게 수정 병합 하였습니다.</li>
          <li><strong>팀프로젝트 를 통해 </strong> git-hup 에 대한 사용법 이해도를 높혔습니다.</li>
         
        </ul>
      </Col>
    </Row>
  </Container>
    </>
  )
}
