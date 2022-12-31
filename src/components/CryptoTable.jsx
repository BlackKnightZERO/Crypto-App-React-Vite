import { Container, Typography, TextField, LinearProgress, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState, tableHeadList } from '../context/CryptoContext'
import { Link } from 'react-router-dom';

const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
    },
    type: "dark"
  });

const CryptoTable = () => {

    const {coin, loading, search, setSearch} = CryptoState()

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
                {/* <table>
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
                </table> */}
                <TableContainer>
                  {
                    loading ? (
                      <LinearProgress className="linear-progress" />
                    ) : (
                      <Table aria-label="crypto table">
                        <TableHead className="table-head">
                          <TableRow>
                            { tableHeadList.map(item => {
                              return(
                              <TableCell 
                                key={item} 
                                align={ item === "Coin" ? "" : "right" }
                                className="table-head-cell">{item}</TableCell>
                                )
                              }
                            ) }
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            coin && coin.filter(item => {
                              return item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())
                            })
                            .map(item => {
                              let profit = item?.price_change_percentage_24h >= 0
                              return (
                                <TableRow>
                                  <Link  
                                    to={`/coins/${item.id}`}>
                                  <TableCell 
                                    conponent="th"
                                    scope="row"
                                    align=""
                                    className="table-body-cell">
                                      <img 
                                        src={item?.image}
                                        alt={item?.name}
                                        className="table-cell-img"
                                      />
                                  </TableCell>
                                  </Link>
                                </TableRow>
                              )
                            })
                          }
                        </TableBody>
                      </Table>
                    )
                  }
                </TableContainer>
            </Container>
        </ThemeProvider>
    </>
  )
}

export default CryptoTable