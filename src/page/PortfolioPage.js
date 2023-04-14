import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
export default function PortfolioPage() {
  const settings = {
    dots: true, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 500, // 다음 컨텐츠 까지의 속도
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: '1px', // 중앙 컨텐츠 padding 값
    draggable: true, // 드래그      ,
    fade: false, // 사라졌다 나타나는 효과
    arrows: true, // 좌,우 버튼
    vertical: false, // 세로 캐러셀
    initialSlide: 0, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
    responsive: [ // 반응형 옵션 
    {
        breakpoint: 400, // (숫자)px 이하일 경우
          settings: {
            slidesToShow: 1,
            arrows:true,
      }
    }
    ]
  };
  return (
    <div>
    <div className='slider_box'>
        <h2> 포트폴리오 </h2>
        <div className='bounce-left'>✅ 드래그도 가능 합니다 </div>
        <Slider  {...settings} className="slider">
          <div>
          
              <Row>
                <Col lg={6} >
                  <img className='dshops_img' src='https://user-images.githubusercontent.com/108445626/230342897-73eb5bd7-1410-4110-ba23-819d4861169a.png'></img>
                  <img className='dshops_img' src='images/우리동네2.png'></img>
                </Col>
                <Col lg={6}>
                  
                  <div className='des'>
                    <h1 className='des_title'>팀 프로젝트 </h1>
                    
                    <div className='des_ds'>프로젝트 이름 : 우리동네 d-shops</div>
                    <div>팀원 : FE : 김혜인 BE : 이재훈</div>
                    <div className='des_content'>설명 : 40,50대 오프라인 마켓을 이용하는 사장님들을 위한 <br/>
                      위치기반 간편 서비스를 활용한 온라인 마켓 플랫폼 
                    </div>
                    <div>🌈Front-end 사용한 기술</div>
                    <div>
                      <ul>
                        <li>React</li>
                        <li>Redux-toolkit</li>
                        <li>Axios Rest api</li>
                        <li>Firebase</li>
                        <li>Google oathu</li>
                        <li>React-bootstrap</li>
                      </ul>
                    </div>
                    
                    <div className='des_link'>홈페이지 링크 : <Link to ='https://d-shops.netlify.app/'> 우리동네 d-shops </Link></div>
                    git-hup 사이트 : <Link to='https://github.com/Couch-Coders/13th-d-shops-fe'>git-hup</Link>
                    <div>시연영상 : <Link to='https://www.youtube.com/watch?v=sKGnBNJr0-0&feature=youtu.be'>youtube_d-shops</Link></div>
                    </div>
                </Col>
              </Row>
           
          </div>

          <div>
            <>
            <Row>
                <Col lg={6} >
                  <img className='dshops_img' src='images/김집사.png'></img>
                  <img className='dshops_img' src='images/김집사장바구니.png'></img>
                </Col>
                <Col lg={6}>
                  
                  <div className='des'>
                    <h1 className='des_title'>개인프로젝트 </h1>
                    
                    <div className='des_ds'>프로젝트 이름 : 김집사</div>
                    <div>팀원 : FE : 김혜인 </div>
                    <div className='des_content'>설명 : 고양이 전용 애완용품샵 입니다.<br/>
                    홈페이지를 관리하는 대표만 판매가 가능하며 <br/>
                    소비자는 장바구니에 상품을 담고 구매가 가능 합니다.
                    </div>
                    <div>🌈Front-end 사용한 기술</div>
                    <div>
                      <ul>
                        <li>React</li>
                        <li>Context</li>
                        <li>Firebase</li>
                        <li>Google oathu</li>
                        <li>React-bootstrap</li>
                      </ul>
                    </div>
                    
                    <div className='des_link'>홈페이지 링크 : <Link to ='http://navaer.shop'> 김집사 </Link></div>
                    git-hup 사이트 : <Link to='https://github.com/tkrkr55/animalshop'>git-hup</Link>
                    <div>유튜브 시연영상 <Link to='https://www.youtube.com/watch?v=BE5HmAKQCEE'>김집사시연영상</Link></div>
                   
                    </div>
                </Col>
              </Row>
            </>
          </div>
          <div>~
            <>
            <Row>
                <Col lg={6} >
                  <img className='dshops_img' src='/images/유튜브메인.png'></img>
                  <img className='dshops_img' src='images/유튜브내용.png'></img>
                </Col>
                <Col lg={6}>
                  
                  <div className='des'>
                    <h1 className='des_title'>개인프로젝트(클론코딩) </h1>
                    
                    <div className='des_ds'>프로젝트 이름 : Youtube </div>
                    <div>팀원 : FE : 김혜인 </div>
                    <div className='des_content'>설명 : 유튜브 클론코딩을 통해 api 사용해보기 <br/>
                    </div>
                    <div>🌈Front-end 사용한 기술</div>
                    <div>
                      <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Youtube api</li>
                        <li>React-bootstrap</li>
                      </ul>
                    </div>
                    
                    <div className='des_link'>홈페이지 링크 : <Link to ='https://kimhyeinyoutube.netlify.app/'> Youtube </Link></div>
                    git-hup 사이트 : <Link to='https://github.com/tkrkr55/YoutubeProject'>git-hup</Link>
                   
                    </div>
                </Col>
              </Row>
           
            </>
          </div>
          <div>
            <> <Row>
                <Col lg={6} >
                  <img className='dshops_img' src='images/넷플릭스메인.png'></img>
                  <img className='dshops_img' src='images/넷플릭스내용.png'></img>
                </Col>
                <Col lg={6}>
                  
                  <div className='des'>
                    <h1 className='des_title'>개인프로젝트(클론코딩) </h1>
                    
                    <div className='des_ds'>프로젝트 이름 : 넷플릭스 클론코딩</div>
                    <div>팀원 : FE : 김혜인 </div>
                    <div className='des_content'>설명 : 넷플릭스 클론코딩을 통한 api 사용법 숙지 <br/>
                     
                    </div>
                    <div>🌈Front-end 사용한 기술</div>
                    <div>
                      <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React-bootstrap</li>
                        <li>Themovie api </li>
                      </ul>
                    </div>
                    
                    <div className='des_link'>홈페이지 링크 : <Link to ='https://kimhyeinnetflix.netlify.app/'> 넷플릭스</Link></div>
                    git-hup 사이트 : <Link to='https://github.com/tkrkr55/nexfl'>git-hup</Link>
                    
                    </div>
                </Col>
              </Row></>
          </div>
          <div>
            <>
            <Row>
                <Col lg={6} >
                  <img className='dshops_img' src='images/todolist2.png'></img>
                  <img className='dshops_img' src='images/todolist.png'></img>
                </Col>
                <Col lg={6}>
                  
                  <div className='des'>
                    <h1 className='des_title'>개인프로젝트 나만의 todolist </h1>
                    
                    <div className='des_ds'>프로젝트 이름 : 나만의 todolist</div>
                    <div>팀원 : FE : 김혜인 </div>
                    <div className='des_content'>설명 : 나의 할일 기록 리스트를 적고 진행중 인 목록과 완료한 목록을 <br/>
                    구분지어 관리할 수 있는 todolist 입니다.
                    </div>
                    <div>🌈Front-end 사용한 기술</div>
                    <div>
                      <ul>
                        <li>React</li>
                        <li>React-bootstrap</li>
                      </ul>
                    </div>
                    
                    <div className='des_link'>홈페이지 링크 : <Link to ='https://kimhyeintodolist.netlify.app/'> todoList </Link></div>
                    
                    
                    </div>
                </Col>
              </Row>
            </>
          </div>
          
          
        </Slider>
      </div>
      </div>
  )
}
