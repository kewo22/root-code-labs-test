import { FC, ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VehicleBid } from "../../interfaces/vehicleBid";

import './style.scss'

const Bid: FC = (): ReactElement => {

    const vehicleBids = useSelector((state: any) => state.vehicles.vehicleBids);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const sum = vehicleBids.reduce((accumulator: number, object: VehicleBid) => {
            return accumulator + object.bidAmount;
        }, 0);
        setSum(sum)
    }, [])


    return (
        <>
            <h1>Biddings</h1>
            {
                vehicleBids.length &&
                vehicleBids.map((vehicleBid: VehicleBid, key: number) => (
                    <div key={key} className="bid-wrapper">
                        <div className="vehicle-details">
                            <img src={vehicleBid.image} alt="vehicle" />
                            <p>{vehicleBid.name}</p>&nbsp;
                            <p>{vehicleBid.brand}</p>&nbsp;
                            <p>{vehicleBid.manufactureYear}</p>
                        </div>
                        <div className="bid-amount">
                            {vehicleBid.bidAmount} LKR
                        </div>
                    </div>
                ))
            }

            <div>
                TOTAL {sum}
            </div>

        </>
    );

};

export default Bid;