import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { SearchBar } from './searchBar';
import Image from 'next/image';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-black border-b-2 border-blue-400">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}>
            <Image
              src={'/image/gmovie-logo.png'}
              alt="logo"
              width={80}
              height={30}
            />
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
