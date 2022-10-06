import React, { useEffect } from 'react';

function SubCategoryBar() {
    useEffect(() => {
        console.log('construction');
        return () => { console.log('destroy'); }
    }, [])
    return (
        <>
                <nav className="navbar  justify-content-around  subCategoryBarr" style={{ minWidth: '100%', zIndex: 2 ,borderTop: '1px solid white',backgroundColor:"#F7F8FA"}}>
                    <div className="sub-category-container ">
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/fluency/64/000000/hamper.png' />
                            <li className="side-item">Superette</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-makeup-supermarket-photo3ideastudio-lineal-color-photo3ideastudio.png' />
                            <li className="side-item">Santé et Beauté</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/emoji/64/000000/mobile-phone.png' />
                            <li className="side-item">Téléphone</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/fluency/48/000000/kitchen-room.png' />
                            <li className="side-item">Électroménager</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/color/64/000000/shirt.png' />
                            <li className="side-item">Mode Homme</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-fashion-sewing-flaticons-flat-flat-icons.png' />
                            <li className="side-item">Mode Femme</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/bubbles/64/000000/this-pc.png' />
                            <li className="side-item">Informatique</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/officel/64/000000/hdtv.png' />
                            <li className="side-item">Électroniques</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-office-wayfinding-flaticons-flat-flat-icons-2.png' />
                            <li className="side-item">Maison et Bureau</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/bubbles/50/000000/controller.png' />
                            <li className="side-item">Jeux et Consoles</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/color/48/000000/sports.png' />
                            <li className="side-item">sport</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/cute-clipart/64/000000/garden-shears.png' />
                            <li className="side-item">Jardin</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/clouds/64/000000/car.png' />
                            <li className="side-item">AUTOMOBILE</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/cute-clipart/64/000000/motorcycle.png' />
                            <li className="side-item">MOTO et Bicyclettes</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/fluency/48/000000/healthy-eating.png' />
                            <li className="side-item">Alimentation</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/fluency/48/000000/stroller.png' />
                            <li className="side-item">BÉBÉS</li>
                        </a>
                        <a className="nav-a-cat">
                            <img className="nav-img-c" src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-services-automotive-dealership-flaticons-lineal-color-flat-icons.png' />
                            <li className="side-item">SERVICES</li>
                        </a>
                    </div>
                </nav>
        </>
    )
}


export default SubCategoryBar

