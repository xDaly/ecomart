import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function CustomCarousel({ datas }) {

    return (
        <div className="customcarousel">
            <Carousel showThumbs={false} emulateTouch={true}  autoPlay={true} infiniteLoop={true}  dynamicHeight={false}>
                {datas ? datas.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item} style={{objectFit: 'cover',height:'30vh'}} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                    )
                }) : null}
            </Carousel>
        </div>
    )
}