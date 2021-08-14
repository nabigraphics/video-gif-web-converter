import styled from "@emotion/styled";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "react-feather";

interface UploaderProps {
  onFileChange?(file: File): void;
}

const Uploader = ({ onFileChange }: UploaderProps) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/gif, video/mp4",
    onDrop: (files) => onFileChange?.(files[0]),
  });

  return (
    <StyledDndBox {...getRootProps()}>
      <input {...getInputProps()} />
      <StyledUploadIcon size={64} color="#96306e" />
      <StyledHeading>GIF or MP4</StyledHeading>
      <StyledText>Drag and drop file here</StyledText>
    </StyledDndBox>
  );
};

export default Uploader;

const StyledDndBox = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  background: #ffeef9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
    position: absolute;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    content: "";
    margin: 16px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23c06ca0' stroke-width='2' stroke-dasharray='8%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    box-sizing: border-box;
    border-radius: 20px;
  }
`;

const StyledUploadIcon = styled(Upload)`
  margin-bottom: 32px;
`;

const StyledHeading = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #96306e;
  text-align: center;
  margin-bottom: 8px;
`;

const StyledText = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #96306e;
  text-align: center;
`;
