import React from "react";
import clsx from "clsx";
import MUIThemeProvider from "../MUIThemeProvider";
import {Box, Paper} from "@mui/material";
import PageHeader from "../PageHeader/PageHeader.tsx";
import PageFooter from "../PageFooter/PageFooter.tsx";

export interface IPageContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function PageContainer(props: IPageContainerProps) {
  const {className, ...rest } = props;
  return (
    <MUIThemeProvider>
      <Box sx={{height: '100%', backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column', justifyContent: 'stretch'}}>
        <PageHeader />
        <Box sx={{p: 3, flex: 1}}>
          <Paper sx={{borderRadius: '12px', p: '24px', height: '100%'}} elevation={3}>
            <div className={clsx("page-container", className)} {...rest} />
          </Paper>
        </Box>
        <PageFooter />
      </Box>
    </MUIThemeProvider>

  );
}