import { FC, ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CurrencyFormatter } from '../../helpers/currency-formatter';

import { VehicleBid } from "../../interfaces/vehicleBid";

import './style.scss'

const Bid: FC = (): ReactElement => {

    const vehicleBids: any[] = useSelector((state: any) => state.vehicles.vehicleBids);
    const [sum, setSum] = useState('');

    useEffect(() => {
        const sum = vehicleBids.reduce((accumulator: number, object: VehicleBid) => {
            return accumulator + object.bidAmount;
        }, 0);
        setSum(CurrencyFormatter(sum))
    }, [])


    return (
        <div className="bid-page-wrapper">
            <h1>Biddings</h1>

            {!vehicleBids.length && <div className="no-bids">No Bids Yet</div>}

            {vehicleBids && vehicleBids.map((vehicleBid, key) => (
                <div key={key} className="bid-wrapper">
                    <div className="vehicle-details">
                        <img src={vehicleBid.image} alt="vehicle" />
                        <p>{vehicleBid.name}</p>&nbsp;
                        <p>{vehicleBid.brand}</p>&nbsp;
                        <p>{vehicleBid.manufactureYear}</p>
                    </div>
                    <div className="bid-amount">
                        {CurrencyFormatter(vehicleBid.bidAmount)} LKR
                    </div>
                </div>
            ))}

            <div className="total">
                TOTAL {sum} LKR
            </div>

        </div>
    );

};

export default Bid;