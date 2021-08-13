import React, { useEffect } from "react";
import { useState } from "react";

import FFmpegSevice from "../services/ffmpeg";

const Logger = () => {
  const [log, setLog] = useState<any[]>([]);
  useEffect(() => {
    FFmpegSevice.ffmpeg.setLogger(({ type, message }) => {
      setLog((prev) => {
        const newArr = [...prev];
        newArr.push(message);
        return newArr;
      });
    });
  }, []);
  return (
    <div>
      {log.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Logger;
