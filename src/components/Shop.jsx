



export default function Shop() {
    return (
        <div className="shop">


            <div className="card user-card">
                {/* <div className="card-header">
                    <h5>Profile</h5>
                </div> */}
                <div className="card-block">
                    <div className="user-image">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-radius" alt="User-Profile-Image" />
                    </div>
                    <h6 className="f-w-600 ">Alessa Robert</h6>
                    <p className="text-muted ">Technologie</p>
                    <hr />
                    <p className="text-muted m-0">Activity Level: 87%</p>
                    <ul className="list-unstyled activity-leval">
                        <li className="active"></li>
                        <li className="active"></li>
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="bg-c-blue counter-block">
                        <div className="d-flex justify-content-around">
                            <div className="">
                                <i style={{ color: "black" }} className="fa-thin fa-heart"></i>
                                <p style={{ marginBottom: 0, color: "black" }}>1256</p>
                            </div>
                            <div className="">
                                <i style={{ color: "black" }} className="fa-thin fa-user"></i>
                                <p style={{ marginBottom: 0, color: "black" }}>8562</p>
                            </div>

                        </div>
                    </div>
                    <div className="mt-1 counter-block">
                        <div className="d-flex justify-content-between">
                            <button style={{ width: "45%",fontSize:"0.7em" }} className="btn btn-outline-dark">like </button>
                            <button style={{ width: "45%",fontSize:"0.7em" }} className="btn btn-outline-dark">follow </button>
                        </div>
                    </div>
                    {/* <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                    <hr style={{margin:5}} />
                    <div className="d-flex justify-content-between  m-1">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-regular fa-phone"></i>
                    </div>
                </div>
            </div>


            {/* <div className=" card border-0 card-two">
                <header>
                    <div className="avatar">
                        <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Allison Walker" />
                    </div>
                </header>

                <h3>Allison Walker</h3>
                <div className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.
                </div>
                <div className="contacts d-flex justify-content-around">
                    <a href=""><i className="fa fa-thin fa-phone"></i></a>
                    <a href=""><i className="fa fa-brands fa-facebook-f"></i></a>
                    <a href=""><i className="fa fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa fa-brands fa-whatsapp"></i></a>
                </div>
                <div className="contacts-buttons d-flex justify-content-around">
                    <button className="btn btn-outline-light m-2">FOLLOW</button>
                    <button className="btn btn-outline-light m-2">LIKE</button>
                    <button className="btn btn-outline-light m-2">VISIT</button>
                </div>
            </div> */}
        </div>
    )
}