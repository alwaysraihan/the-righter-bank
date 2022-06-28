import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../../state/action-creators";
const Shop = () => {
    const dispatch = useDispatch();
    const { depositeMoney, withdrawMoney } = bindActionCreators(
        actionCreators,
        dispatch
    );
    return (
        <>
            <div className="container">
                <h2 className="my-5">Deposit/Withdraw Money</h2>
                <div className="display-flex">
                    {/* without bindActionCreators */}
                    {/* <button
                        className="btn btn-primary"
                        onClick={() =>
                            dispatch(actionCreators.withdrawMoney(200))
                        }
                    >
                        -
                    </button>
                    <span> Update Balance </span>
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            dispatch(actionCreators.depositeMoney(250))
                        }
                    >
                        +
                    </button> */}
                    <button
                        className="btn btn-primary"
                        onClick={() => depositeMoney(500)}
                    >
                        -
                    </button>
                    <span> Update Balance </span>
                    <button
                        className="btn btn-primary"
                        onClick={() => withdrawMoney(50)}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
};

export default Shop;
