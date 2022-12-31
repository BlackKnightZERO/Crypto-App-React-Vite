import { Container, Typography, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../context/CryptoContext'

const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
    },
    type: "dark"
  });

const Table = () => {

    const {search, coin, setSearch} = CryptoState()

  return (
    <>
        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: "center" }}>
                <Typography variant="h4" className="table-header">
                    Cryptocurrency Prices by Market Cap
                </Typography>
                <TextField 
                    label="Search for a cryptocurrency.." 
                    variant="outlined" 
                    className="table-search"
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table>
                    <tbody>
                        { coin && coin.filter(f=>f.name.toLowerCase().includes(search.toLowerCase())).map(item => {
                            return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.symbol}</td>
                            </tr>
                        )
                    }) }
                    </tbody>
                </table>
            </Container>
        </ThemeProvider>
    </>
  )
}

export default Table