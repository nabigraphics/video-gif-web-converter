import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";
import FFmpegService from "./services/ffmpeg";

import Logger from "./components/Logger";
import Uploader from "./components/Uploader";

const App = () => {
  const [initialized, setInitialized] = useState(false);
  const [file, setFile] = useState();

  useEffect(() => {
    FFmpegService.init();
  }, []);

  return (
    <div>
      {/* Loger Component */}
      <Logger />
      {/* Uploader Component */}
      <Uploader />
      {/* Loading Component */}
      {/* Result Component */}
    </div>
  );
};

export default App;
