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
        <i className={`xi-volume-${muted ? "off" : "up"}`}></i>
      </MuteButton>

      <OmedetouText>정말 축하해! {name}!</OmedetouText>

      <Video ref={videoRef} loop muted={muted}>
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
  left: 5px;
  top: 5px;

  font-size: 45px;
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
