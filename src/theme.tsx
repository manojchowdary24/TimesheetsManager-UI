import { createMuiTheme } from "@material-ui/core/styles";
import * as colors from "./constants/colors";

export default createMuiTheme({
  palette: {
    type: "dark",
    error: {
      main: colors.brick
    },
    primary: {
      main: colors.blue
    },
    success: {
      main: colors.gray
    },
    background: {
      default: colors.darkMGray,
      paper: colors.darkMGray
    },
    text: {
      primary: colors.gray
    }
  }
});
