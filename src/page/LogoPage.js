import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import { AttentionSeeker } from 'react-awesome-reveal';
const LogoPageDiv = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size:5rem;
`;
export default function LogoPage() {
  const navigate = useNavigate()


  const timeout = () => {
		setTimeout(() => {
			navigate('/home');
		}, 3000);
	};
	useEffect(() => {
		timeout();
		return () => {
			clearTimeout(timeout);
		};
	}); 
  return (
    <div>
      <LogoPageDiv>
			<AttentionSeeker tada>
				<img src='/images/logo.jpg'/>
			</AttentionSeeker>
		</LogoPageDiv>
    </div>
  )
}
