import React from 'react';


//components



function MobileSearch() {

    return (
        <>
            <div className="bg-light" style={{height: '100vh'}}>
                <div className="input-group search-field-mobile">
                    <input type="text" className="form-control searchInput border-0" style={{ height: 55,borderRadius:0 }} placeholder="Product Name" aria-label="Product Name" aria-describedby="button-addon2" />
                    <div className="input-group-append" style={{marginLeft: 1}}>
                        <button className="btn search-btn-mobile border-0" style={{ height: 55, width: 70 }} type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}





export default MobileSearch