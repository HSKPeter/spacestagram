export default interface IPropsOfDateInputBox {
  label: string;
  handleChange: (date: Date | null) => any;
  disable: boolean;
}
