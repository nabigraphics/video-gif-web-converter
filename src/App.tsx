import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";
import FFmpegService from "./services/ffmpeg";

import Logger from "./components/Logger";
import Uploader from "./components/Uploader";
import PreviousConvertStep from "./components/PreviousConvertStep";

const App = () => {
  const [initialized, setInitialized] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleReset = () => {
    setFile(null);
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
      {file && (
        <PreviousConvertStep originalFile={file} onReset={handleReset} />
      )}
      {/* Loading Component */}
      {/* Result Component */}
    </div>
  );
};

export default App;
