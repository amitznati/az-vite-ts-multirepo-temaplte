import {Box, OutlinedInput, OutlinedInputProps, InputLabel, FormControl} from '@mui/material';

export type TextInputProps = OutlinedInputProps;
export default function TextInput(props: TextInputProps) {
  return (
    <Box >
      <FormControl fullWidth color="secondary">
        {props.label && <InputLabel>{props.label}</InputLabel>}
        <OutlinedInput {...props} />
      </FormControl>
    </Box>
  );
}
