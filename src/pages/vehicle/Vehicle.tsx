import { FC, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input/Input";

import useFetchData from "../../hooks/useFetch";

import { Vehicle as IVehicle } from "../../interfaces/vehicle";

import './style.scss'

const Vehicle: FC = (): ReactElement => {
    const navigate = useNavigate()

    const { vehicleId } = useParams();

    const { fetchData } = useFetchData();

    const [vehicle, setVehicle] = useState<IVehicle | null>(null);


    useEffect(() => {
        getVehicle();
    }, [vehicleId])


    const getVehicle = async () => {
        const vehicle = await fetchData(`vehicles/${vehicleId}`);
        if (vehicle) console.log(vehicle)
        setVehicle(vehicle);
    }

    const onBackClick = () => {
        navigate('/vehicles')
    }

    const onClick = () => {

    }

    return (
        <>
            {vehicle && (
                <div className="vehicle-wrapper">
                    <button className="back-btn" onClick={onBackClick}>
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                        Back
                    </button>
                    <div className="vehicle-details">
                        <img src={vehicle.details.image} alt="vehicle" />
                        <div>
                            <span className="title">
                                {vehicle.details.brand}{' '}
                                {vehicle.name} {' '}
                                {vehicle.details.manufactureYear}
                            </span>
                            <br />
                            <br />
                            <span className="desc">Description</span>
                            <p>{vehicle.details.description}</p>
                            <Input/>
                        </div>
                        <button onClick={onClick}>Submit</button >
                    </div>
                </div>
            )}
        </>
    );
};

export default Vehicle;
