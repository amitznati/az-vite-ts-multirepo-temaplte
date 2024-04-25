import { createTheme } from '@mui/material/styles';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ReactNode} from "react";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#E20074',
        },
        secondary: {
            main: '#000000',
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
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    height: '48px'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    // fontSize: '0.95rem',
                    transform: 'translate(14px, 14px) scale(1)',
                },
                shrink: {
                    transform: 'translate(14px, -9px) scale(0.75) !important',
                },
                outlined: {
                    // transform: 'translate(14px, 14px) scale(1)',
                },
            },
        },
    }
});

export default function MUIThemeProvider(props: {children: ReactNode}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}