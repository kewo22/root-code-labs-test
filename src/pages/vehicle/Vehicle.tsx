import { FC, ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

    return (
        <>
            {vehicle && (
                <div className="vehicles-wrapper">
                    <button className="back-btn" onClick={onBackClick}>
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                        Back
                    </button>
                </div>
            )}
        </>
    );
};

export default Vehicle;
