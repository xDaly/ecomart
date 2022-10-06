
import { Link } from 'react-router-dom';


export default function BottomNav({ }) {
    return (
        <nav className=" navbar navbar-expand-md  white-bg show-mobile bottom-bar" style={{ position: 'fixed', minWidth: '100%', height: '55px', bottom: 0, zIndex: 1000 }}>
            <div className="container-fluid justify-content-between d-flex">
                <Link className="bottom-nav-item"
                    to={{
                        pathname: "/home"
                    }}>
                    <i className="fa-thin fa-house-heart black-color"></i>
                    <p className="bottom-nav-text">home</p>
                </Link>
                <Link className="bottom-nav-item"
                    to={{
                        pathname: "/shops"
                    }}>
                    <i className="fa-thin fa-shop black-color"></i>
                    <p className="bottom-nav-text">shops</p>
                </Link>
                <Link className="bottom-nav-item"
                    to={{
                        pathname: "/profile"
                    }}>
                    <i className="fa-thin fa-bolt black-color"></i>
                    <p className="bottom-nav-text">promotions</p>
                </Link>
                <Link className="bottom-nav-item"
                    to={{
                        pathname: "/profile"
                    }}>
                    <i className="fa-thin fa-fire-flame black-color"></i>
                    <p className="bottom-nav-text">trending</p>
                </Link>

                <Link className="bottom-nav-item"
                    to={{
                        pathname: "/profile"
                    }}
                >
                    <i className="fa-thin fa-user black-color"></i>
                    <p className="bottom-nav-text">profil</p>

                </Link>

            </div>


        </nav>

    )
}
