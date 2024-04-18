import { forwardRef } from "react";
import { styled } from '@mui/material/styles';
import {Button as MUIButton, ButtonProps as MUIButtonProps} from '@mui/material';

const StyledButton = styled(MUIButton)({
  padding: '12px 16px',
  borderRadius: '4px',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  border: 'none',
  textDecoration: 'none',
  textTransform: 'none'
});

export type ButtonProps = MUIButtonProps;

const Button = forwardRef<HTMLButtonElement, MUIButtonProps>(
  (
    {
      ...props
    },
    ref,
  ) => {

    return (
      <StyledButton
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
