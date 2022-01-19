import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IPropsOfDetailsDialog from '../interfaces/IPropsOfDetailsDialog';

export default function DetailsDialog(props: IPropsOfDetailsDialog) {
  return (
    <div>
      <Dialog
        open={props.display}
        onClose={props.handleClose}
        maxWidth="md"
        scroll="paper">
        <DialogTitle>{props.info.title}</DialogTitle>
        <img
          src={props.info.imageURL}
          alt={props.info.title}
          style={{
            objectFit: 'cover',
            maxHeight: '300px',
            width: '100%',
          }}
        />
        <DialogContent>
          <DialogContentText>{props.info.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
