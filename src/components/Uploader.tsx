import React, { FC, ChangeEvent } from "react";

interface UploaderProps {
  onFileChange?(file: File): void;
}

const Uploader = ({ onFileChange }: UploaderProps) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    onFileChange?.(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/gif, video/mp4"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Uploader;
