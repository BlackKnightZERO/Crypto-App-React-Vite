import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';

import { CryptoState } from '../context/CryptoContext'

const Carousel = () => {

    const { trending, currency } = CryptoState()

    const numberFormat = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 4
        }
    }

    const items = trending.map(item => {
        let profit = item?.price_change_percentage_24h >= 0
        return (
            <Link 
                className="carousel-item" 
                to={`/coins/${item.id}`}>
                <img 
                    src={item?.image} 
                    alt={item?.name} 
                    className="carousel-item-image"></img>
                    <span>{item?.symbol}&nbsp;
                        <span className={profit ? "carousel-item-span-positive" : "carousel-item-span-negative" }>
                            {profit && "+"} {item?.price_change_percentage_24h?.toFixed(2)}
                        </span>
                    </span>

                    <span className="carousel-item-span">
                        {currency?.symbol} {numberFormat(item?.current_price.toFixed(2))}
                    </span>
            </Link>
        )
    })


  return (
    <AliceCarousel
        autoPlay 
        infinite
        // mouseTracking
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
    />
  )
}

export default Carousel