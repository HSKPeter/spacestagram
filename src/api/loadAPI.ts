import { Dispatch } from 'redux';
import loadPhotosFailure from '../actions/loadPhotosFailure';
import loadPhotosSuccess from '../actions/loadPhotosSuccess';
import ILoadPhotosAction from '../interfaces/ILoadPhotosAction';

const { REACT_APP_NASA_API_KEY } = process.env;

export default function loadAPI() {
  return async (dispatch: Dispatch<ILoadPhotosAction>) => {
    try {
      const startDate = '2022-01-01';
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}&start_date=${startDate}`
      );
      const result = await res.json();

      if (!Array.isArray(result)) throw new Error('');

      dispatch(loadPhotosSuccess(result));
    } catch (err) {
      dispatch(loadPhotosFailure());
    }
  };
}
