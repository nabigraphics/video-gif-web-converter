import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";

import FFmpegService from "./services/ffmpeg";

import Logger from "./components/Logger";
import Uploader from "./components/Uploader";
import PreviousConvertStep from "./components/PreviousConvertStep";
import ConvertResultContainer from "./components/ConvertResultContainer";
import useFFmpegConvert from "./hooks/useFFmpegConvert";

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
    <div>
      {/* Loger Component */}
      <Logger />
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
    </div>
  );
};

export default App;
