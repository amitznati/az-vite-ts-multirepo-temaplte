import {Box} from "@mui/material";

export default function PageHeader() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', p: '24px', backgroundColor: '#000'}} >
      <Box className="page-header-logo">
        <img src="/TFB-Logo.png" alt="logo" />
      </Box>
    </Box>
  )
}