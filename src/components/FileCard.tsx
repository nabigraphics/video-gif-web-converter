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
          {fileName}
          {fileType}
        </div>
      );
    case "video/mp4":
      return (
        <div>
          <StyledVideo controls src={src} />
          {fileName}
          {fileType}
        </div>
      );
    default:
      return (
        <div>
          {fileName}
          {fileType}
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
