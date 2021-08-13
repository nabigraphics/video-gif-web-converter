const getFilenameWithoutFileType = (filename: string) => {
  if (filename.trim() === "") return "untitled";

  const splited = filename.split(".");
  if (splited.length >= 2) {
    splited.pop();
    return splited.reduce((prev, curr) => prev + curr, "");
  }
  return filename;
};

export default getFilenameWithoutFileType;
