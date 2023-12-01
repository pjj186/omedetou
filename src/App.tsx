import { FormEventHandler, useRef, useState } from 'react';
import * as Styled from './App.styles';
import Pollen from './Pollen';
const mp4 = require('./omedetou.mp4');

function App() {
  const url = new URL(window.location.href);
  const searchParam = new URLSearchParams(url.searchParams);

  const name = searchParam.get('name');

  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [muted, setMuted] = useState(true);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      window.location.assign(`?name=${inputRef.current.value}`);
      inputRef.current.value = '';
    }
  };

  const toggleMuted = () => {
    setMuted((muteState) => !muteState);
  };

  return (
    <Styled.Container>
      {name ? (
        <>
          <Pollen />
          <Styled.VolumeButton onClick={toggleMuted}>
            <i className={`xi-volume-${muted ? 'off' : 'up'}`}></i>
          </Styled.VolumeButton>
          <Styled.OmedetouText>정말 축하해! {name}!</Styled.OmedetouText>
          <Styled.Video autoPlay loop muted={muted} ref={videoRef}>
            <source src={mp4} type='video/mp4'></source>
          </Styled.Video>
        </>
      ) : (
        <Styled.InputContainer>
          <Styled.NameInputBox as='form' onSubmit={handleSubmit}>
            <Styled.NameQuestionText>
              What's your name? {name}
            </Styled.NameQuestionText>
            <input ref={inputRef} />
            <Styled.OKButton onClick={handleSubmit}>OK</Styled.OKButton>
          </Styled.NameInputBox>
        </Styled.InputContainer>
      )}
    </Styled.Container>
  );
}

export default App;
