import AppBar from '@mui/material/AppBar'
import { Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [currency, setCurrency] = useState("USD")

  return (
    <AppBar position="static" color="transparent">
      <div className="header-wrapper">
        <Toolbar>
            <Typography variant="h6" component="div" className="header-logo">
              <Link to="/">
                Crypto-App-React-Vite
              </Link>
            </Typography>
          <div>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <Select
                value={currency}
                onChange={ (event) => setCurrency(event.target.value) }
                autoWidth
              >
                <MenuItem value="USD">&nbsp;&nbsp;&nbsp; USD &nbsp;&nbsp;&nbsp;</MenuItem>
                <MenuItem value="BDT">&nbsp;&nbsp;&nbsp; BDT &nbsp;&nbsp;&nbsp;</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  )
}

export default Header