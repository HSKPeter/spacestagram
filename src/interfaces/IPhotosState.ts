import IPhotoData from './IData';

export default interface IPhotosState {
  hasLoaded: boolean;
  hasError: boolean;
  data: IPhotoData[];
}
