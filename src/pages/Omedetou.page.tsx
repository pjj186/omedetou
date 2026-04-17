import { useRef, useState } from "react";
import Confetti from "react-confetti";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
const mp4 = require("../assets/omedetou.mp4");

export const Omedetou = ({ name }: { name: string }) => {
  const windowSize = useWindowSize();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <Container>
      <Confetti width={windowSize.width} height={windowSize.height} />

      <MuteButton onClick={() => setMuted((muteState) => !muteState)}>
        {muted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="white" />
            <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="white" />
            <path d="M15.54 8.46C16.48 9.4 17 10.67 17 12C17 13.33 16.48 14.6 15.54 15.54" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M18.07 5.93C19.78 7.64 20.73 9.87 20.73 12.2C20.73 14.53 19.78 16.76 18.07 18.47" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </MuteButton>

      <OmedetouText>정말 축하해! {name}!</OmedetouText>

      <Video ref={videoRef} loop autoPlay playsInline muted={muted}>
        <source src={mp4} type="video/mp4"></source>
      </Video>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  position: relative;
  height: 100vh;
`;

const MuteButton = styled.button`
  position: absolute;
  z-index: 1;
  left: 12px;
  top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);

  font-size: 24px;
  color: white;
`;

const OmedetouText = styled.span`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  word-break: keep-all;

  color: white;
  font-size: 5rem;
  text-shadow: 2px 2px 2px black;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
