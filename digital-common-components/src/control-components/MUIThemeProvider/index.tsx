import { createTheme } from '@mui/material/styles';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ReactNode} from "react";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#E20074',
        },
        secondary: {
            main: '#16A819',
        },
        error: {
            main: '#D20D00',
        },
        warning: {
            main: '#F47500',
            light: '#E3BB2A'
        },
        divider: '#0000006B'

    },
});

export default function MUIThemeProvider(props: {children: ReactNode}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}