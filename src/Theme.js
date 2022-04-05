import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000"
    }
  },
  spacing: (factor) => `${0.92 * factor}rem`
});
