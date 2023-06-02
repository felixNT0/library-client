import Resizer from "react-image-file-resizer";

export const resizeFile = (file: any) => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file.originFileObj,
      1000,
      1000,
      "JPEG",
      100,
      0,
      (uri: any) => {
        resolve(uri);
      },
      "base64"
    );
  });
};

export const dataURIToBlob = (dataURI: any) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
};
