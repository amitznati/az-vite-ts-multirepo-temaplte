import React from "react";
import clsx from "clsx";
import MUIThemeProvider from "../MUIThemeProvider";
import {Box, Paper} from "@mui/material";

export interface IPageContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function PageContainer(props: IPageContainerProps) {
  const {className, ...rest } = props;
  return (
    <MUIThemeProvider>
      <Box sx={{p: '24px'}}>
        <Paper sx={{borderRadius: '12px', p: 2}}>
          <div className={clsx("page-container", className)} {...rest} />
        </Paper>
      </Box>

    </MUIThemeProvider>

  );
}