// photos and short clips share the same slots; a video file extension switches to <video>.
export const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);
