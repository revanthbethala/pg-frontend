import {
  CameraType,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export type SelectedImage = {
  uri: string;
  type?: string;
  fileName?: string;
  fileSize?: number;
};
export const useImagePicker = () => {
  const pickFromGallery = async (selectionLimit: number = 1) => {
    const res = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit,
    });

    if (res.didCancel || res.errorCode) {
      return [];
    }

    return (
      res.assets
        ?.filter(asset => asset.uri)
        .map(asset => ({
          uri: asset.uri!,
          type: asset.type,
          fileName: asset.fileName,
          fileSize: asset.fileSize,
        })) ?? []
    );
  };

  const pickFromCamera = async (
    cameraType: CameraType = 'back',
  ): Promise<SelectedImage[]> => {
    const res = await launchCamera({
      mediaType: 'photo',
      cameraType: cameraType,
      saveToPhotos: true,
    });

    if (res.didCancel || res.errorCode) {
      return [];
    }

    return (
      res.assets
        ?.filter(asset => asset.uri)
        .map(asset => ({
          uri: asset.uri!,
          type: asset.type,
          fileName: asset.fileName,
          fileSize: asset.fileSize,
        })) ?? []
    );
  };

  return {
    pickFromGallery,
    pickFromCamera,
  };
};
