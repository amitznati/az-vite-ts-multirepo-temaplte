import {Typography} from "@mui/material";

export const Title = (props: {children: string}) => {
  return <Typography variant="h2">{props.children}</Typography>;
}