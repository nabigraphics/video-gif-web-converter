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
  const [initialized, setInitialized] = useState(false);
  const [file, setFile] = useState<File | null>(null);

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
        {isLoading && <div>Loading...</div>}
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
