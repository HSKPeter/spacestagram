import {
  LOAD_PHOTO_FROM_API_BEGIN,
  LOAD_PHOTO_FROM_API_SUCCESS,
  LOAD_PHOTO_FROM_API_FAILURE,
} from '../constants/ActionTypes';
import ILoadPhotosAction from '../interfaces/ILoadPhotosAction';
import IPhotosState from '../interfaces/IPhotosState';

const initialState: IPhotosState = {
  hasLoaded: false,
  hasError: false,
  data: [],
};

const photosReducer = (state = initialState, action: ILoadPhotosAction) => {
  switch (action.type) {
    case LOAD_PHOTO_FROM_API_BEGIN:
      return {
        ...state,
      };
    case LOAD_PHOTO_FROM_API_SUCCESS:
      return {
        data: action.result,
        hasLoaded: true,
        hasError: false,
      };
    case LOAD_PHOTO_FROM_API_FAILURE:
      return {
        ...state.data,
        hasLoaded: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default photosReducer;
