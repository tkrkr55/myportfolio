import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoPage from './LogoPage'
import {AiFillGithub} from 'react-icons/ai';
import {SiTistory} from 'react-icons/si';


export default function Home() {
  let [title,setTitle] = useState(false)
  let [des,setDes] = useState(false)
  const url = 'https://github.com/tkrkr55'
  const tistory = 'https://hyeru.tistory.com/'
  useEffect(()=>{

    const timer = setTimeout(()=>{
      setTitle(true)
    },1500)
    return ()=> clearTimeout(timer )
    
  },[])
  useEffect(()=>{

  const timer = setTimeout(()=>{
      setDes(true)
    },3000)
    return ()=> clearTimeout(timer )
    
  },[])
  return (
    <>
    <div className='home_box'>
    <div className='focus-in-contract-bck'>  안녕하십니까 </div>
    { title  === true ?
    (<div className='focus-in-contract-bck'><sapn style={{color:"#55cbcd"}}>열정 가득한 </sapn>신입 프론트 엔드 개발자 <sapn style={{color:"#97c1a9"}}>김혜인</sapn>  입니다.  </div>) : null}
    { des === true ? 
    ( <div className='focus-in-contract-bck'> 제 사이트에 방문해 주셔서 감사합니다 :) <button onClick={()=>{window.open(url)}}><AiFillGithub/></button> <button onClick={()=>{window.open(tistory)}}><SiTistory/></button> </div> ) : null}
    </div>
    <div>
  
    </div>
    </>
  )
}
