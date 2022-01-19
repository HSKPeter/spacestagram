import IPhotoData from './IData';

export default interface ILoadPhotosAction {
  type: string;
  result: IPhotoData[];
}
