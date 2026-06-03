export const uploadImage = async (file) => {
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  console.log(cloudName);
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
  console.log(uploadPreset);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "hop");
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    if (!response.ok) {
      throw new Error("failed to upload image");
    }
    const result = await response.json();
    return result.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};
