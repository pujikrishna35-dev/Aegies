export const storageConfig = () => ({
  uploadDest: process.env.UPLOAD_DEST || './uploads',
  maxFileSize: 10 * 1024 * 1024, // 10MB
});
