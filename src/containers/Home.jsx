import React from 'react';


//components
import { Carousel } from '../components'
import Products from './Products.jsx'



function Home() {
    let data = [
        "https://www.wizishop.fr/media/61b315e4eed4ce66bd60e4f7/v1/ecommerce-wizishop.jpg",
        "https://semji.com/wp-content/uploads/2020/05/25.-Ecommerce-SEO-le-guide-complet-pour-optimiser-le-r%C3%A9f%C3%A9rencement-de-son-site.jpg",
        "https://img.freepik.com/vecteurs-libre/magasin-carte-credit-coffrets-cadeaux-illustration-acheteurs_1262-18980.jpg?w=2000",
        "https://img.freepik.com/photos-gratuite/achats-ligne-paiement-e-commerce-banque_53876-127604.jpg?w=2000"
    ]
    return (
        <>
        <div className="container">
            <Carousel datas={data} />
            </div>
            <Products />
        </>
    )
}





export default Home