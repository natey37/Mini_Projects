import { createTheme } from "@material-ui/core/styles";

//Theme colors 
//https://coolors.co/303633-8be8cb-7ea2aa-888da7-9c7a97
export const theme = createTheme({
    palette: {
        primary: {
            main: "#8be8cb"
        },
        secondary: {
            main: '#7ea2aa'
        },
        error: {
            main: '#9c7a97'
        },
        info: {
            main: '#888da7'
        },
        success: {
            main: '#303633'
        }
    },
});
