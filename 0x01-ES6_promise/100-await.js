import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = { photo: null, user: null };
  try {
    const photoData = await uploadPhoto();
    const userData = await createUser();
    data.photo = photoData;
    data.user = userData;
  } catch (error) {
    return data;
  }
  return data;
}
