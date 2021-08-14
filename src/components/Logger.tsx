import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { FileText } from "react-feather";

import FFmpegSevice from "../services/ffmpeg";

const Logger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [log, setLog] = useState<any[]>([]);

  useEffect(() => {
    FFmpegSevice.ffmpeg.setLogger(({ type, message }) => {
      setLog((prev) => {
        const newArr = [...prev];
        newArr.push(message);
        return newArr;
      });
    });
  }, []);

  return (
    <>
      <StyledLogButton onClick={() => setIsOpen((prev) => !prev)}>
        <StyledIcon size="16px" color="#8627B6" />
        Log
      </StyledLogButton>
      {isOpen && (
        <StyledLogBox>
          {log.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </StyledLogBox>
      )}
    </>
  );
};

export default Logger;

const StyledIcon = styled(FileText)`
  margin-right: 10px;
`;

const StyledLogButton = styled.button`
  appearance: none;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;

  position: fixed;
  top: 32px;
  left: 32px;
  width: 69px;
  height: 32px;

  background-color: #fff;
  border: 1px solid #b65ee5;
  box-sizing: border-box;
  border-radius: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #8627b6;
`;

const StyledLogBox = styled.div`
  position: fixed;
  top: 80px;
  left: 32px;

  padding: 24px;

  background: #ffffff;
  border: 1px solid #8aa8b2;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  max-width: 400px;
  width: 100%;
  height: 360px;

  overflow-y: auto;

  div {
    width: 100%;
    word-break: break-all;
    margin-bottom: 8px;
    padding: 2px 6px;
    background-color: #f4f9fa;
    border-radius: 4px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #475c64;
  }
`;
