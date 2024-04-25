import {
  Box,
  BoxProps,
  ClickAwayListener, IconButton, InputAdornment,
  OutlinedInput,
  Paper,
  Popper,
  PopperPlacementType,
  PopperProps
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Done as DoneIcon} from "@mui/icons-material";
import {styled, Theme} from "@mui/material/styles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {SxProps} from "@mui/material";
import {ReactNode, useRef, useState} from "react";

export interface DropdownProps {
  label?: string;
  selected: string;
  onChange: (value: string) => void;
  options: Array<string>;
  sx?: SxProps<Theme>;
  boxProps?: BoxProps;
}

export const StyledMenuItem = styled(MenuItem)({
  display: 'flex',
  justifyContent: 'space-between',
  '&:hover': {backgroundColor: '#FFF'},
  '&.Mui-selected': {backgroundColor: '#FFF', '&:hover': {backgroundColor: '#FFF'}}
});

interface StyledMenuProps {
  open: boolean;
  anchorEl: PopperProps['anchorEl'];
  children: ReactNode[] | ReactNode;
  placement?: PopperPlacementType;
  width?: number;

}

export const StyledMenu = (
  {open, anchorEl, children, placement="bottom-start", width}
    : StyledMenuProps) => {
  return (
    <Popper sx={{width}} className="!my-[8px] z-[999] group" open={open} anchorEl={anchorEl} placement={placement}>
      <Paper className="py-[8px] max-h-[320px] overflow-x-hidden">
        {children}
      </Paper>
    </Popper>
  )
}

export default function Dropdown(props: DropdownProps) {
  const {onChange, selected, label, options, boxProps} = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Box {...boxProps}>
      <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
        <FormControl fullWidth color="secondary" >
          {label && <InputLabel>{label}</InputLabel>}
          <OutlinedInput
            ref={inputRef}
            value={selected}
            label={label}
            readOnly
            onClick={() => setMenuOpen(!menuOpen)}
            inputProps={{
              sx: {cursor: 'pointer'}
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setMenuOpen(!menuOpen)}
                  onMouseDown={() => setMenuOpen(!menuOpen)}
                  edge="end"
                >
                  {menuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          {menuOpen && <StyledMenu open anchorEl={inputRef.current} width={inputRef.current?.offsetWidth}>
            {options.map(option => (
              <StyledMenuItem onClick={() => onChange(option)} className={`text-ellipsis`} key={option} value={option}>
                <div>{option}</div>
                {option === selected && <DoneIcon />}
              </StyledMenuItem>
            ))}
          </StyledMenu>}
        </FormControl>
      </ClickAwayListener>
    </Box>
  );
}
