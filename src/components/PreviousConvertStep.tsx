import React, { useEffect, useMemo, useState } from "react";
import useFileBlobUrl from "../hooks/useFileBlobUrl";
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
  const blobUrl = useFileBlobUrl(originalFile);

  const fileName = useMemo(
    () => getFilenameWithoutFileType(originalFile.name),
    [originalFile]
  );
  const fileType = useMemo(() => originalFile.type, [originalFile]);

  const isImage = fileType.indexOf("image") > -1;

  return (
    <div>
      {blobUrl && (
        <FileCard src={blobUrl} fileName={fileName} fileType={fileType} />
      )}
      <button onClick={onReset}>Reset</button>
      <button onClick={onConvert}>Convert</button>
    </div>
  );
};

export default PreviousConvertStep;
