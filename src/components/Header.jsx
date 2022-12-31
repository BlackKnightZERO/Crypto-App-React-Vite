import AppBar from '@mui/material/AppBar'
import { FormControl, Select, MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import { CryptoState, currencyLibrary } from '../context/CryptoContext';

const Header = () => {

  const {currency, currencyLibId, setCurrencyLibId} = CryptoState()

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
                value={currencyLibId}
                onChange={(e) => setCurrencyLibId(e.target.value)}
                autoWidth
              >
                {
                  currencyLibrary.map(item => {
                    return <MenuItem key={item.id} value={item.id}>&nbsp;&nbsp;&nbsp; {item.__currency.toUpperCase()} &nbsp;&nbsp;&nbsp;</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  )
}

export default Header