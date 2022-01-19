import { LOAD_PHOTO_FROM_API_FAILURE } from '../constants/ActionTypes';

const loadPhotosFailure = () => ({
  type: LOAD_PHOTO_FROM_API_FAILURE,
  result: [],
});

export default loadPhotosFailure;
