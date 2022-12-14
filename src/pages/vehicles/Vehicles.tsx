import { FC, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import useValidateBidAmount from "../../hooks/useValidateBidAmount";
import useFetchData from "../../hooks/useFetch";

import { addVehicle } from "../../store/slice";

import { Vehicle } from "../../interfaces/vehicle";
import { VehicleBid } from "../../interfaces/vehicleBid";

import Card from "../../components/Card/Card";

import './style.scss'

const Vehicles: FC = (): ReactElement => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const { fetchData } = useFetchData();
    const { validate } = useValidateBidAmount();

    const [bidAmount, setBidAmount] = useState<number>(0);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        getVehicles();
    }, [])

    const getVehicles = async () => {
        const vehicles = await fetchData('vehicles');
        setVehicles(vehicles);
    }

    const onClick = (vehicle: Vehicle) => {
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

    const onChange = (e: string) => {
        setBidAmount(+e)
    }

    const onFilterChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const url = value ? `vehicles?details.brand=${value}` : 'vehicles';
        const vehicles = await fetchData(url);
        setVehicles(vehicles);
    }

    const onBidButtonClick = () => {
        navigate('/bid')
    }

    const onDetailClick = (vehicle: Vehicle) => {
        navigate(`/vehicle/${vehicle.id}`)
    }

    return (
        <>
            <div className="top-section">
                <div>
                    <label>Brand</label> <br />
                    <select onChange={onFilterChange}>
                        <option value="">All</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Audi">Audi</option>
                        <option value="Ford">Ford</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="BMW">BMW</option>
                    </select>
                </div>
                <div>
                    <button onClick={onBidButtonClick} className="icon-button">
                        <span className="material-symbols-outlined">
                            local_mall
                        </span>
                    </button>
                </div>
            </div>
            <div className="vehicles-wrapper">
                {vehicles && vehicles.map((vehicle: Vehicle, key) => (
                    <Card
                        key={key}
                        image={vehicle.details.image}
                        description={vehicle.details.description}
                        title={vehicle.name}
                        onClick={() => { onClick(vehicle) }}
                        onChange={onChange}
                        onDetailClick={() => { onDetailClick(vehicle) }}
                    />
                ))}
            </div>
        </>
    );
};

export default Vehicles;
