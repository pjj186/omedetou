import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7bed9f;
`;

const NameInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameQuestionText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const OmedetouText = styled.span`
  color: white;
  font-size: 5rem;
  text-shadow: 2px 2px 2px black;
  position: absolute;
  bottom: 4rem;
  left: 33%;
`;

const OKButton = styled.button`
  all: unset;
  margin-top: 1rem;
  color: white;
  background-color: #5890ff;
  text-align: center;
  padding: 0.5rem;
  border-radius: 10px;
`;

function App() {
  const [name, setName] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setConfirm(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // 원하는 볼륨 레벨로 변경할 수 있습니다.
    }
  }, []);

  return (
    <Container>
      {confirm ? (
        <>
          <OmedetouText>정말 축하해! {name}!</OmedetouText>
          <Video autoPlay loop ref={videoRef}>
            <source src='./omedetou.mp4' type='video/mp4'></source>
          </Video>
        </>
      ) : (
        <InputContainer>
          <NameInputBox>
            <NameQuestionText>What's your name?</NameQuestionText>
            <input type='text' onChange={handleChange} />
            <OKButton onClick={handleSubmit}>OK</OKButton>
          </NameInputBox>
        </InputContainer>
      )}
    </Container>
  );
}

export default App;
