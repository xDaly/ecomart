import { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function ProductDisplay({ datas }) {
    const [image, setImage] = useState("")

    const imgs = [
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/5.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/7.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/4.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/3.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/5.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/7.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/4.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/3.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/5.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/7.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/4.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/3.jpg?0971",
        "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3874/1.jpg?0971"
    ]
    return (
        <div className="customcarousel">
            <Carousel showThumbs={true} emulateTouch={true} autoPlay={true} infiniteLoop={true} dynamicHeight={false} thumbWidth={100}>
                {imgs ? imgs.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item} style={{ objectFit: 'cover' }} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                    )
                }) : null}
            </Carousel>
        </div>
    )
}




