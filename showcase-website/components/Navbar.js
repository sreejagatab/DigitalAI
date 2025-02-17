// components/Navbar.js
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Digital Product Showcase</Typography>
      </Toolbar>
    </AppBar>
  );
}
