import styled from "@emotion/styled";
import React from "react";

import useBlobUrl from "../hooks/useBlobUrl";
import { ConvertedDataType } from "../hooks/useFFmpegConvert";

import FileCard from "./FileCard";

interface ConvertResultContainerProps {
  originalFile: File;
  convertedData: ConvertedDataType;
}

const ConvertResultContainer = ({
  originalFile,
  convertedData,
}: ConvertResultContainerProps) => {
  const originalBlobUrl = useBlobUrl(originalFile);
  const convertedBlobUrl = useBlobUrl(convertedData.blob);
  return (
    <StyledWrapperBox>
      {originalBlobUrl && (
        <div>
          <StyledText>Original</StyledText>
          <FileCard
            src={originalBlobUrl}
            fileName={originalFile.name}
            fileType={originalFile.type}
          />
        </div>
      )}
      {convertedBlobUrl && (
        <StyledConvertedFileContainer>
          <StyledText>Converted</StyledText>
          <FileCard
            src={convertedBlobUrl}
            fileName={convertedData.fileName}
            fileType={convertedData.mimeType}
          />
          <StyledDownloadButton
            href={convertedBlobUrl}
            download={convertedData.fileName}
          >
            Download
          </StyledDownloadButton>
        </StyledConvertedFileContainer>
      )}
    </StyledWrapperBox>
  );
};

export default ConvertResultContainer;

const StyledWrapperBox = styled.div`
  display: flex;
`;

const StyledConvertedFileContainer = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #232c30;

  margin-bottom: 16px;
`;

const StyledDownloadButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  height: 56px;

  border: none;
  background-color: #96306e;
  box-sizing: border-box;
  border-radius: 4px;

  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  color: #fff;
`;
