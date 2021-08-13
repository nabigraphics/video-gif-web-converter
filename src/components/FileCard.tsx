import React from "react";

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
          <img src={src} />
          {fileName}
          {fileType}
        </div>
      );
    case "video/mp4":
      return (
        <div>
          <video src={src} />
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
