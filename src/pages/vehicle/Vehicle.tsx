import { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input/Input";

import useFetchData from "../../hooks/useFetch";
import useValidateBidAmount from "../../hooks/useValidateBidAmount";

import { Vehicle as IVehicle } from "../../interfaces/vehicle";
import { VehicleBid } from "../../interfaces/vehicleBid";
import { addVehicle } from "../../store/slice";

import './style.scss'

const Vehicle: FC = (): ReactElement => {
    const navigate = useNavigate()

    const { vehicleId } = useParams();
    const dispatch = useDispatch();
    const { fetchData } = useFetchData();
    const { validate } = useValidateBidAmount();

    const [vehicle, setVehicle] = useState<IVehicle | null>(null);
    const [bidAmount, setBidAmount] = useState<number>(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        getVehicle();
    }, [vehicleId])


    const getVehicle = async () => {
        const vehicle = await fetchData(`vehicles/${vehicleId}`);
        if (vehicle) setVehicle(vehicle);
    }

    const onBackClick = () => {
        navigate('/vehicles')
    }

    const onClick = () => {
        if (vehicle) {
            const isValid = validate(vehicle, bidAmount);
            if (isValid) {
                const vehicleBid: VehicleBid = {
                    image: vehicle.details.image,
                    name: vehicle.name,
                    brand: vehicle.details.brand,
                    manufactureYear: vehicle.details.manufactureYear,
                    bidAmount: bidAmount
                }
                dispatch(addVehicle(vehicleBid))
            }

        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
        event.target.value && setBidAmount(+event.target.value);
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
                            <div className="desc">
                                <span className="desc-label">Description</span>
                                <p>{vehicle.details.description}</p>
                            </div>
                            <p>Color: <span style={{ backgroundColor: vehicle.details.color }} className='color-indicator'></span></p>
                            <Input onChange={onChange} />
                        </div>
                        <button disabled={isButtonDisabled} onClick={onClick}>Submit</button >
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Vehicle;
