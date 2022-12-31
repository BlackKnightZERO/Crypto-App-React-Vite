import { Container, Typography } from '@mui/material'
import './App.css'
import Carousel from './components/Carousel'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
      <div className="banner">
        <Container>
          <div className="tagline">
            <Typography
              variant="h2"
              className="banner-typography-header"
            >
              Crypto-Tracker
            </Typography>
            <Typography
              variant="subtitle2"
              className="banner-typography"
            >
              Get your favorite Crypto Currency Information
            </Typography>
          </div>

          <Carousel />

        </Container>
        App
      </div>
    </>
  )
}

export default App
