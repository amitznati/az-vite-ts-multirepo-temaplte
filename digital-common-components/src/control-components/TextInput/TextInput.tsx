import {TextField, TextFieldProps, ThemeProvider} from '@mui/material';
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

export type TextInputProps = TextFieldProps;
export default function TextInput(props: TextFieldProps) {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props} />
    </ThemeProvider>
  );
}
