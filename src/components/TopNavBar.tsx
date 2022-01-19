import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const galaxyTheme = createTheme({
  palette: {
    primary: {
      main: '#000977',
    },
  },
});

function TopNavBar() {
  return (
    <ThemeProvider theme={galaxyTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2 }}
              id="appTitle">
              👨🏻‍🚀 Spacestagram
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default TopNavBar;