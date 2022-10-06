
import { Link } from 'react-router-dom';




export default function Product({ datas }) {

    return (
        <div className="product">
            <Link
                to={{ pathname: "productdetail" }}
            >
                <div className="card" price='23.64 TND'>
                    <img className="card-img-top" src="https://img.ltwebstatic.com/images3_pi/2022/06/14/165518307481fea1badc644795a4c0b737304f672a_thumbnail_405x552.webp" alt="Card image cap" />
                    {/* <div className="card-body">
                    <p className="card-text">Some quick content.</p>
                </div> */}
                </div>
            </Link>
        </div>
    )
}