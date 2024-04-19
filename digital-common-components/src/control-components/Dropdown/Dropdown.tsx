import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";

export interface DropdownProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  width?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

export default function Dropdown(props: DropdownProps) {
  const {onChange, value, label, options, width} = props;
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{width}} >
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
