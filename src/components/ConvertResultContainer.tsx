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
    <div>
      {originalBlobUrl && (
        <div>
          <FileCard
            src={originalBlobUrl}
            fileName={originalFile.name}
            fileType={originalFile.type}
          />
        </div>
      )}
      {convertedBlobUrl && (
        <div>
          <FileCard
            src={convertedBlobUrl}
            fileName={convertedData.fileName}
            fileType={convertedData.mimeType}
          />
          <a href={convertedBlobUrl} download={convertedData.fileName}>
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ConvertResultContainer;
