import React from "react";

const Shop = () => {
    return (
        <>
            <div className="container">
                <h2 className="my-5">Deposit/Withdraw Money</h2>
                <div className="display-flex">
                    <button className="btn btn-primary">-</button>
                    <span> Update Balance </span>
                    <button className="btn btn-primary">+</button>
                </div>
            </div>
        </>
    );
};

export default Shop;
