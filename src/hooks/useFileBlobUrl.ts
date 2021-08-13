import { useEffect, useState } from "react";

const useFileBlobUrl = (file: File | null) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      setBlobUrl(URL.createObjectURL(file));
    } else {
      setBlobUrl(null);
    }
  }, [file]);

  useEffect(() => {
    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [blobUrl]);

  return blobUrl;
};

export default useFileBlobUrl;
