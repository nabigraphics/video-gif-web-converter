import styled from "@emotion/styled";
import React, { useMemo } from "react";
import useBlobUrl from "../hooks/useBlobUrl";
import getFilenameWithoutFileType from "../utils/getFilenameWithoutFileType";
import FileCard from "./FileCard";

interface PreviousConvertStepProps {
  originalFile: File;
  onConvert(): void;
  onReset(): void;
}

const PreviousConvertStep = ({
  originalFile,
  onConvert,
  onReset,
}: PreviousConvertStepProps) => {
  const blobUrl = useBlobUrl(originalFile);

  const fileName = useMemo(
    () => getFilenameWithoutFileType(originalFile.name),
    [originalFile]
  );
  const fileType = useMemo(() => originalFile.type, [originalFile]);

  return (
    <div>
      {blobUrl && (
        <FileCard src={blobUrl} fileName={fileName} fileType={fileType} />
      )}
      <StyledButtonContainer>
        <StyledButton onClick={onReset}>Reset</StyledButton>
        <StyledConvertButton onClick={onConvert}>
          Convert File
        </StyledConvertButton>
      </StyledButtonContainer>
    </div>
  );
};

export default PreviousConvertStep;

const StyledButton = styled.button`
  appearance: none;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  height: 56px;

  border: none;
  background-color: #e5f0f3;
  box-sizing: border-box;
  border-radius: 4px;

  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #232c30;
`;

const StyledConvertButton = styled(StyledButton)`
  margin-left: 12px;
  background-color: #96306e;
  color: #fff;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
