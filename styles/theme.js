import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#31708e',
      mainGradient: "linear-gradient(to right, #0e76a8, #5389b5)",
    },
    secondary: {
      main: '#414042',
    },
    background: {
      default: '#f7f9fb'
    }
  },
});

export default theme
