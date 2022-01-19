import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import DetailsDialog from './DetailsDialog';
import IPropsOfPhotoCard from '../interfaces/IPropsOfPhotoCards';
import trimText from '../utilities/trimText';
import copyToClipboard from '../utilities/copyLinkToClipboard';
import MessagePrompt from './MessagePrompt';

export default function PhotoCard(props: IPropsOfPhotoCard) {
  const [isLiked, setLike] = useState(false);
  const [displayDialog, setDialogDisplay] = useState(false);
  const [displayMessagePrompt, setMessagePromptDisplay] = useState(false);

  const handleLike = () => {
    const newStatus = !isLiked;
    setLike(newStatus);
  };

  const openDialogDisplay = () => {
    setDialogDisplay(true);
  };

  const closeDialogDisplay = () => {
    setDialogDisplay(false);
  };

  const shareImageLinkToUser = () => {
    copyToClipboard(props.imageURL);
    setMessagePromptDisplay(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, marginLeft: 'auto', marginRight: 'auto' }}>
        <CardMedia
          component="img"
          height="300"
          image={props.imageURL}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {props.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {trimText(props.description)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like" onClick={handleLike}>
            <FavoriteIcon color={isLiked ? 'error' : 'inherit'} />
          </IconButton>
          <IconButton aria-label="info" onClick={openDialogDisplay}>
            <InfoIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={shareImageLinkToUser}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <DetailsDialog
        display={displayDialog}
        info={{ ...props }}
        handleClose={closeDialogDisplay}
      />
      {displayMessagePrompt ? (
        <MessagePrompt
          autoHiddenMs={2000}
          display={displayMessagePrompt}
          message="Image link copied to clipboard"
          severity="info"
          handleClose={() => {
            setMessagePromptDisplay(false);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
}
