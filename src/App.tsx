import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";

import FFmpegService from "./services/ffmpeg";

import Logger from "./components/Logger";
import Uploader from "./components/Uploader";
import PreviousConvertStep from "./components/PreviousConvertStep";
import ConvertResultContainer from "./components/ConvertResultContainer";
import useFFmpegConvert from "./hooks/useFFmpegConvert";
import GlobalStyle from "./components/GlobalStyle";
import styled from "@emotion/styled";

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const { isLoading, isDone, isError, convertedData, convert } =
    useFFmpegConvert(file);

  const handleReset = () => {
    setFile(null);
  };

  const handleConvert = () => {
    convert();
  };

  useEffect(() => {
    FFmpegService.init();
  }, []);

  useEffect(() => {
    if (isLoading) {
      FFmpegService.ffmpeg.setProgress(({ ratio }) => {
        setProgress(ratio);
      });
    } else {
      setProgress(0);
    }
  }, [isLoading]);

  return (
    <>
      <GlobalStyle />
      {/* Loger Component */}
      <Logger />
      <StyledLayoutContainer>
        {/* Uploader Component */}
        {!file && <Uploader onFileChange={setFile} />}
        {/* PreviousConvertStep (File Selected) */}
        {file && !convertedData && !isLoading && (
          <PreviousConvertStep
            originalFile={file}
            onConvert={handleConvert}
            onReset={handleReset}
          />
        )}
        {/* Loading Component */}
        {isLoading && (
          <StyledLoadingContainer>
            <StyledProgressBarWrapper>
              <StyledProgressBar
                style={{
                  width: Intl.NumberFormat("en", { style: "percent" }).format(
                    progress
                  ),
                }}
              />
            </StyledProgressBarWrapper>
            Converting...{" "}
            {Intl.NumberFormat("en", { style: "percent" }).format(progress)}
          </StyledLoadingContainer>
        )}
        {/* Result Component */}
        {file && isDone && (
          <ConvertResultContainer
            originalFile={file}
            convertedData={convertedData}
          />
        )}
      </StyledLayoutContainer>
    </>
  );
};

export default App;

const StyledLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #232c30;
`;

const StyledProgressBarWrapper = styled.div`
  width: 140px;
  height: 4px;
  position: relative;
  z-index: 10;
  background-color: #e5f0f3;
  margin-bottom: 8px;
`;

const StyledProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #ab4b86;
`;
