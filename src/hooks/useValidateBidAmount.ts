import { Vehicle } from "../interfaces/vehicle";

const useValidateBidAmount = () => {

    const validate = (vehicle: Vehicle, bidAmount: number) => {
        if (Math.sign(bidAmount) === -1) {
            alert('invalid bid amount')
            return false;
        }
        if (bidAmount <= vehicle.details.price) {
            alert('amount should be greater that car value')
            return false;
        }
        return true;
    };


    return {
        validate
    };
};

export default useValidateBidAmount;