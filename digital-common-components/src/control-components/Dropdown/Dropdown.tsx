import {Box, BoxProps} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {createTheme, Theme} from "@mui/material/styles";
import {SxProps, ThemeProvider} from "@mui/material";

export interface DropdownProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  sx?: SxProps<Theme>;
  boxProps?: BoxProps;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

export default function Dropdown(props: DropdownProps) {
  const {onChange, value, label, options, boxProps} = props;
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box {...boxProps}>
        <FormControl fullWidth>
          {label && <InputLabel sx={{color: 'black'}}>{label}</InputLabel>}
          <Select
            value={value}
            label={label}
            onChange={handleChange}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
