import React from 'react';
// import ScrollContainer from 'react-indiana-drag-scroll'

function CategoryBar() {
    return (
        <>
            <nav className="navbar navbar-expand-md  white-bg  " style={{ position: 'absolute', minWidth: '100%', height: '65px' }}>
                <div className="container-fluid" style={{ flexWrap: 'initial' }}>
                    <div className="d-flex justify-content-between" style={{ flex: 1 }}>
                        <a className="navbar-toggler">
                            <i className="fa-solid fa-house black-color"></i>
                        </a>
                        <a className="navbar-toggler">
                            <i className="fa-solid fa-store black-color"></i>
                        </a>
                        <a className="navbar-toggler">
                            <i className="fa-solid fa-bolt-lightning black-color"></i>
                        </a>
                        <a className="navbar-toggler">
                            <i className="fa-solid fa-star black-color"></i>
                        </a>
                    </div>               
                    <div className="collapse navbar-collapse w-100 ">
                        <ul className="nav navbar-nav w-100 justify-content-center d-flex">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Kids</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Unisexe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Gadgets</a>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>


        </>
    )
}


export default CategoryBar