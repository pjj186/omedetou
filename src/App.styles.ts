import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
`;

export const VolumeButton = styled.button`
  all: unset;
  position: absolute;
  z-index: 1;
  left: 5px;
  top: 5px;

  font-size: 45px;
  color: white;
  cursor: pointer;
`;

export const OmedetouText = styled.span`
  color: white;
  font-size: 5rem;
  text-shadow: 2px 2px 2px black;
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: #7bed9f;
`;

export const NameInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameQuestionText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const OKButton = styled.button`
  all: unset;
  margin-top: 1rem;
  color: white;
  background-color: #5890ff;
  text-align: center;
  padding: 0.5rem;
  border-radius: 10px;
`;
