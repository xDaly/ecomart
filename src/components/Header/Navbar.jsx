import React, { useState } from 'react';
import { Link } from 'react-router-dom';




import { categoryBarOc } from '../../store/actions/staticActions';
import { useSelector, useDispatch } from 'react-redux';
import SubCategoryBar from './SubCategoryBar'


import { selectcategoryBar } from '../../store/reducers/staticReducers';
function Navbar() {
    // redux
    const dispatch = useDispatch()
    const categoryBar = useSelector(selectcategoryBar);



    const [sidebar, setSidebar] = useState('close')
    const [searchBar, setSearchBar] = useState(false)

    const openCategoryBar = () => {
        dispatch(categoryBarOc())
    }
    return (
        <>
            {/* <nav>
                <div className="">
                        <img src="https://img.ltwebstatic.com/images3_acp/2022/07/19/1658196138ed73caf932f8d56a471d39af7d6101f5.webp"  className="img-fluid" />
                </div>
            </nav>  */}
            <div className="nav " style={{ zIndex: 11, position: 'relative', height: 50, lineHeight: '50px' }}>

                <div className="container-fluid right d-flex justify-content-end">

                    <a className="top-bar-icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="top-bar-icon"><i className="fa-brands fa-facebook-messenger"></i></a>
                    <a className="top-bar-icon"><i className="fa-brands fa-instagram"></i></a>
                    <a className="top-bar-icon"><i className="fa-brands fa-whatsapp"></i></a>
                    <a className="top-bar-icon"><i className="fa-regular fa-phone"></i></a>




                </div>
            </div>

            <div className="sticky-top">

                <nav className="navbar navbar-expand-md navbar-dark grey-bg " style={{ minWidth: '100%', height: '65px', zIndex: 1050 }}>

                    <div className="container-fluid" style={{ flexWrap: 'initial' }}>

                        <div className="d-flex justify-content-around" style={{ flex: 1 }}>
                            {sidebar === 'open' ?
                                <a className="navbar-toggler" onClick={() => { setSidebar('close') }} >
                                    <i className="fa-thin fa-bars-sort black-color"></i>
                                </a> :
                                <a className="navbar-toggler" onClick={() => { setSidebar('open') }} >
                                    <i className="fa-thin fa-bars black-color"></i>
                                </a>

                            }
                            <Link className="navbar-toggler"
                                to={{
                                    pathname: "/mobilesearch"
                                }}
                            >
                                <i className="fa-thin fa-magnifying-glass black-color"></i>
                            </Link>

                            {/* <a className="navbar-toggler">
                            <i className="fa-solid fa-house black-color"></i>
                        </a> */}
                            {/* <a className="navbar-toggler">
                            <i className="fa-solid fa-envelope black-color"></i>
                        </a> */}
                        </div>
                        <div className="collapse navbar-collapse w-100 ">
                            <ul className="nav navbar-nav w-100">
                                <li className="nav-item ">
                                    <Link className="nav-link"
                                        to={{
                                            pathname: "/home"
                                        }}
                                    >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                        to={{
                                            pathname: "/shops"
                                        }}
                                    >Shops</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Promotions</a>
                                </li>

                                <li className="nav-item noselect" style={{ backgroundColor: "white", borderRadius: 10 }} >
                                    <a className="nav-link noselect" onClick={() => { openCategoryBar() }}>
                                        {categoryBar ? <i className="fa-duotone fa-xmark" style={{ width: 10 }}></i> : <i className="fa-thin fa-bars black-color " style={{ width: 10 }}></i>} <span className="noselect" style={{ marginLeft: 5 }}>Categories</span></a>
                                </li>
                            </ul>
                        </div>
                        <a className="navbar-brand  order-md-0 mx-0 black-color" href="/" style={{ flex: 1, textAlign: 'center', fontFamily: 'Rye' }}>BECHA</a>
                        <div className="d-flex justify-content-around" style={{ flex: 1 }}>
                            <a className="navbar-toggler nav-link" href="/" style={{ top: '2%' }}>
                                <span className="">
                                    <i className="fa-thin fa-cart-shopping"></i>
                                    <span className="counter-count">00</span>
                                </span>
                            </a>
                            <a className="navbar-toggler nav-link" href="/" style={{ top: '2%' }}>
                                <span className="">
                                    <i className="fa-thin fa-bag-shopping"></i>
                                    <span className="counter-count">01</span>
                                </span>
                            </a>
                            {/* <a className="navbar-toggler">
                            <i className="fa-solid fa-magnifying-glass black-color"></i>
                        </a> */}
                        </div>
                        <div className="collapse navbar-collapse w-100" style={{ flexDirection: 'row-reverse' }}>
                            {!searchBar ? <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => { setSearchBar(true) }}>
                                        <span className="fa-stack">
                                            <i className="fa-thin fa-magnifying-glass"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >
                                        <span className="fa-stack">
                                            <i className="fa-thin fa-cart-shopping"></i>
                                            <span className="counter-count">00</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >
                                        <span className="fa-stack">
                                            <i className="fa-thin fa-bag-shopping"></i>
                                            <span className="counter-count">00</span>
                                        </span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link"
                                        to={{
                                            pathname: "/profile"
                                        }}>
                                        <span className="fa-stack">
                                            <i className="fa-thin fa-user"></i>
                                        </span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <div className="nav-link">
                                        <select className="form-selectt-web" >
                                            <option value="1"  defaultValue>Fr</option>
                                            <option value="2">Eng</option>
                                        </select>
                                    </div>
                                </li>
                            </ul> :
                                <div className="input-group search-field " style={{ height: 55 }}>
                                    <input type="text" className="form-control searchInput border-0" style={{ height: 55 }} placeholder="Product Name" aria-label="Product Name" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn search-btn border-0" style={{ height: 55, width: 70 }} type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        <a className="mx-2 close-btn" onClick={() => { setSearchBar(false) }} type="button" id="button-addon2">close</a>

                                    </div>
                                </div>}
                        </div>












                    </div>

                </nav>



                <div>
                    {categoryBar ? <SubCategoryBar /> : null}

                </div>
            </div>










            <ul className={"sidebar" + " " + sidebar}>
                <div className="nav-header d-flex justify-content-around p-3" >
                    <div className="nav-header-button">
                        <select className="form-selectt" >
                            <option value="1" defaultValue>Fr</option>
                            <option value="2">Eng</option>
                        </select>
                    </div>
                    <div className="nav-header-button">
                        <label>
                            <input className='toggle-checkbox' type='checkbox'></input>
                            <div className='toggle-slot'>
                                <div className='sun-icon-wrapper'>
                                    <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                                </div>
                                <div className='toggle-button'></div>
                                <div className='moon-icon-wrapper'>
                                    <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <a className="nav-header-button close-btn-sidebar" onClick={() => { setSidebar('close') }}><i className="fa-duotone fa-circle-xmark fa-2x"></i></a>

                </div>
                <a className="nav-a" style={{ marginTop: 80 }}>
                    <img className="nav-img" src='https://img.icons8.com/fluency/64/000000/hamper.png' />
                    <li className="side-item">Superette</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-makeup-supermarket-photo3ideastudio-lineal-color-photo3ideastudio.png' />
                    <li className="side-item">Santé et Beauté</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/emoji/64/000000/mobile-phone.png' />
                    <li className="side-item">Téléphone</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/fluency/48/000000/kitchen-room.png' />
                    <li className="side-item">Électroménager</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/color/64/000000/shirt.png' />
                    <li className="side-item">Mode Homme</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-fashion-sewing-flaticons-flat-flat-icons.png' />
                    <li className="side-item">Mode Femme</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/bubbles/64/000000/this-pc.png' />
                    <li className="side-item">Informatique</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/officel/64/000000/hdtv.png' />
                    <li className="side-item">Électroniques</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-office-wayfinding-flaticons-flat-flat-icons-2.png' />
                    <li className="side-item">Maison et Bureau</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/bubbles/50/000000/controller.png' />
                    <li className="side-item">Jeux et Consoles</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/color/48/000000/sports.png' />
                    <li className="side-item">sport</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/cute-clipart/64/000000/garden-shears.png' />
                    <li className="side-item">Jardin</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/clouds/64/000000/car.png' />
                    <li className="side-item">AUTOMOBILE</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/cute-clipart/64/000000/motorcycle.png' />
                    <li className="side-item">MOTO et Bicyclettes</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/fluency/48/000000/healthy-eating.png' />
                    <li className="side-item">Alimentation</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/fluency/48/000000/stroller.png' />
                    <li className="side-item">BÉBÉS</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
                <a className="nav-a">
                    <img className="nav-img" src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-services-automotive-dealership-flaticons-lineal-color-flat-icons.png' />
                    <li className="side-item">SERVICES</li>
                    <img className="nav-img-right" src='https://cdn-icons-png.flaticon.com/512/25/25283.png' />
                </a>
            </ul>


        </>
    )
}


export default Navbar