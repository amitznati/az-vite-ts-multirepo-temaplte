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
      <Box sx={{height: '100%', p: '24px', backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', justifyContent: 'stretch'}}>
        <Paper sx={{borderRadius: '12px', p: 2, flex: 1}}>
          <div className={clsx("page-container", className)} {...rest} />
        </Paper>
      </Box>

    </MUIThemeProvider>

  );
}