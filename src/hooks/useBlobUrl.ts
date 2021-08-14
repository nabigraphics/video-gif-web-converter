import { useEffect, useState } from "react";

const useBlobUrl = (file: File | Blob | null) => {
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

export default useBlobUrl;
