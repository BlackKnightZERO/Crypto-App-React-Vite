import { Container, Typography } from '@mui/material'
import Carousel from '../components/Carousel'

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Container>
          <div className="tagline">
            <Typography
              variant="h2"
              className="banner-typography-header"
            >Crypto-Tracker</Typography>
            <Typography
              variant="subtitle2"
              className="banner-typography"
            >Get your favorite Crypto Currency Information</Typography>
          </div>
          <Carousel />
        </Container>
      </div>
    </>
  )
}

export default Banner