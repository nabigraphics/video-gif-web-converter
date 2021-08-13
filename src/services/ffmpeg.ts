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
}

export default new FFmpegService();
