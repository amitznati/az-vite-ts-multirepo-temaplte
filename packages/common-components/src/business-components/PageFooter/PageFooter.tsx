import {Grid, Stack} from "@mui/material";

export default function PageFooter() {
  return (
    <footer>
      <Grid container spacing={3} sx={{p: 3, width: '100%'}}>
        <Grid item xs={12} sm={12} md={3}>
          <Stack justifyContent="space-between" direction="column" sx={{height: '100%'}}>
            <img width="22px" height="24px" src="/TM-logo-only.png" alt="tm" />
            <p className="text-small">© 2024 T‑Mobile USA, Inc.</p>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Stack direction="column" spacing={1}>
            <p className="text-small">About</p>
            <p className="text-small">Investor relations</p>
            <p className="text-small">Press</p>
            <p className="text-small">Careers</p>
            <p className="text-small">Deutsche Telekom</p>
            <p className="text-small">Puerto Rico</p>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Stack direction="column" spacing={1}>
            <p className="text-small">Privacy</p>
            <p className="text-small">Terms</p>
            <p className="text-small">Accessibility</p>
            <p className="text-small">Open internet</p>
            <p className="text-small">Do not sell my personal information</p>
            <p className="text-small">CA privacy notice</p>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Stack direction="column" spacing={1}>
            <p className="text-small">Privacy</p>
            <p className="text-small">Terms</p>
            <p className="text-small">Accessibility</p>
            <p className="text-small">Open internet</p>
            <p className="text-small">Do not sell my personal information</p>
            <p className="text-small">CA privacy notice</p>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
}