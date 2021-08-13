import { createFFmpeg, fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";

class FFmpegService {
  ffmpeg: FFmpeg = createFFmpeg({ log: true });
  get isSupported() {
    return (window as any).SharedArrayBuffer !== undefined;
  }
  async init(cb?: () => void) {
    await this.ffmpeg.load();
    cb?.();
  }
  async writeFile(filename: string, file: File) {
    this.ffmpeg.FS("writeFile", filename, await fetchFile(file));
  }
}

export default new FFmpegService();
