import React, { FC } from "react";

const Uploader: FC = () => {
  return (
    <div>
      <input type="file" accept="image/gif, video/mp4" />
    </div>
  );
};

export default Uploader;
