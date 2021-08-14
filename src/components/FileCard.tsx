import React from "react";
import styled from "@emotion/styled";
interface FileCardProps {
  src: string;
  fileName: string;
  fileType: string;
}

const FileCard = ({ src, fileName, fileType }: FileCardProps) => {
  switch (fileType) {
    case "image/gif":
      return (
        <div>
          <StyledImage src={src} />
          <StyledFileName>{fileName}</StyledFileName>
          <StyledFileType>{fileType}</StyledFileType>
        </div>
      );
    case "video/mp4":
      return (
        <div>
          <StyledVideo controls src={src} />
          <StyledFileName>{fileName}</StyledFileName>
          <StyledFileType>{fileType}</StyledFileType>
        </div>
      );
    default:
      return (
        <div>
          <StyledFileName>{fileName}</StyledFileName>
          <StyledFileType>{fileType}</StyledFileType>
        </div>
      );
  }
};

export default FileCard;

const StyledImage = styled.img`
  max-width: 640px;
  width: 100%;
`;

const StyledVideo = styled.video`
  max-width: 640px;
  width: 100%;
`;

const StyledFileName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #232c30;
  margin-top: 24px;
  margin-bottom: 4px;
`;

const StyledFileType = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #475c64;
  margin-bottom: 24px;
`;
