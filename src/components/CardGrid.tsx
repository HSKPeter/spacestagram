import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import PhotoCard from './PhotoCard';
import loadAPI from '../api/loadAPI';
import IPhotoData from '../interfaces/IData';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import MessagePrompt from './MessagePrompt';
import { v4 as uuidv4 } from 'uuid';
import IState from '../interfaces/IState';

const mapStateToProps = (state: IState) => ({ ...state });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CardGrid = (props: PropsFromRedux) => {
  const [displayErrorMessage, setErrorMessageDisplay] = useState(true);

  const hidErrorMessage = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorMessageDisplay(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAPI());
  }, []);

  return (
    <>
      {props.photos.hasError ? (
        <MessagePrompt
          display={displayErrorMessage}
          message="Loading Error"
          severity="error"
          handleClose={hidErrorMessage}
          autoHiddenMs={null}
        />
      ) : props.photos.hasLoaded ? (
        <Grid container spacing={4} sx={{ padding: '30px' }}>
          {props.photos.data
            .sort(
              (data1: IPhotoData, data2: IPhotoData) =>
                Date.parse(data2.date) - Date.parse(data1.date)
            )
            .filter((data: IPhotoData) => data.media_type === 'image')
            .map((data: IPhotoData) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                xl={3}
                justifyContent="center"
                alignItems="center"
                key={uuidv4()}>
                <PhotoCard
                  imageURL={data.url}
                  title={data.title}
                  description={data.explanation}
                  date={data.date}
                />
              </Grid>
            ))}
        </Grid>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              padding: '20% 0%',
            }}>
            <CircularProgress />
          </Box>
        </>
      )}
    </>
  );
};

export default connector(CardGrid);
