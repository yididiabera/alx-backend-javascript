export default function UploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
