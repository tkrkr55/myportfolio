import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BiCode,BiCodeAlt} from 'react-icons/bi';
export default function Header() {
  const navigate = useNavigate()
  return (
    <>
    
    <div className='header_wrap'>
      <button className='home' onClick={()=>{navigate('/')}}>소개</button>
      <button className='myinfo' onClick={()=>{navigate('/myinfo')}}>이력서</button>
      <button className='portfolio' onClick={()=>{navigate('/portfolio')}}>포토폴리오</button>
      <button className='skil' onClick={()=>{navigate('/skil')}}>사용기술 </button>
    </div>
    </>
  )
}
