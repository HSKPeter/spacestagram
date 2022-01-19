import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface IPropsOfMessagePrompt {
  message: string;
  display: boolean;
  severity: 'error' | 'info';
  handleClose: () => void;
  autoHiddenMs: null | number;
}

const MessagePrompt = (props: IPropsOfMessagePrompt) => {
  return (
    <Snackbar
      open={props.display}
      autoHideDuration={props.autoHiddenMs}
      onClose={props.handleClose}>
      <Alert severity={props.severity} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default MessagePrompt;
