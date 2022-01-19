import IPropsOfPhotoCards from './IPropsOfPhotoCards';

interface IPropsOfDetailsDialog {
  info: IPropsOfPhotoCards;
  display: boolean;
  handleClose: () => void;
}

export default IPropsOfDetailsDialog;
