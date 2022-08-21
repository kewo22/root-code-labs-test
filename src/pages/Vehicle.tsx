import { FC, ReactElement, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Vehicle: FC = (): ReactElement => {
    // const [searchParams] = useSearchParams();
    const { vehicleId } = useParams();

    return (
        <>
            <h1>1</h1>
            <h1>{vehicleId}</h1>
        </>
    );
};

export default Vehicle;