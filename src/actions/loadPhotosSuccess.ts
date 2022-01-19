import { LOAD_PHOTO_FROM_API_SUCCESS } from '../constants/ActionTypes';
import IPhotoData from '../interfaces/IData';

const loadPhotosSuccess = (result: IPhotoData[]) => ({
  type: LOAD_PHOTO_FROM_API_SUCCESS,
  result,
});

export default loadPhotosSuccess;
